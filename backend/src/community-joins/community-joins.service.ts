import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CommunityJoin } from './entities/community-join.entity';
import { CreateCommunityJoinDto } from './dto/create-community-join.dto';
import {Channel} from "../chat/entities/channel.entity";
import {ChatUser} from "../chat/entities/chat-user.entity";


@Injectable()
export class CommunityJoinsService {
  constructor(
    @Inject('COMMUNITY_JOIN_REPOSITORY')
    private repo: Repository<CommunityJoin>,

    @Inject('CHANNEL_REPOSITORY')
    private readonly channelRepository: Repository<Channel>,

    @Inject('CHAT_USER_REPOSITORY')
    private readonly chatUserRepository: Repository<ChatUser>,

  ) {}

  // async create(dto: CreateCommunityJoinDto) {
  //   const existing = await this.repo.findOne({
  //     where: {
  //       user: { id: dto.user_id },
  //       community: { id: dto.community_id },
  //     },
  //   });
  //
  //   if (dto.status === 1) {
  //     if (existing) return existing;
  //
  //     const join = this.repo.create({
  //       user: { id: dto.user_id },
  //       community: { id: dto.community_id },
  //     });
  //     return this.repo.save(join);
  //   } else if (dto.status === 0) {
  //     if (existing) {
  //       await this.repo.remove(existing);
  //       return { message: 'Left community successfully' };
  //     }
  //     return { message: 'No existing join found to remove' };
  //   }
  //
  //   return { message: 'Invalid status value (must be 0 or 1)' };
  // }

  // async create(dto: CreateCommunityJoinDto) {
  //   const existing = await this.repo.findOne({
  //     where: {
  //       user: { id: dto.user_id },
  //       community: { id: dto.community_id },
  //     },
  //     relations: ['user', 'community'], // in case user already joined
  //   });
  //
  //   if (dto.status === 1) {
  //     if (existing) {
  //       return {
  //         message: 'Already joined community',
  //         user: existing.user,
  //         community: existing.community,
  //       };
  //     }
  //
  //     const join = this.repo.create({
  //       user: { id: dto.user_id },
  //       community: { id: dto.community_id },
  //     });
  //
  //     const saved = await this.repo.save(join);
  //
  //     // Load full user & community details
  //     const full = await this.repo.findOne({
  //       where: { id: saved.id },
  //       relations: ['user', 'community'],
  //     });
  //
  //     return {
  //       message: 'Joined community successfully',
  //       user: full.user,
  //       community: full.community,
  //     };
  //   } else if (dto.status === 0) {
  //     if (existing) {
  //       await this.repo.remove(existing);
  //       return { message: 'Left community successfully' };
  //     }
  //
  //     return { message: 'No existing join found to remove' };
  //   }
  //
  //   return { message: 'Invalid status value (must be 0 or 1)' };
  // }

  async create(dto: CreateCommunityJoinDto) {
    const existing = await this.repo.findOne({
      where: {
        user: {id: dto.user_id},
        community: {id: dto.community_id},
      },
      relations: ['user', 'community'],
    });

    if (dto.status === 1) {
      if (existing) {
        return {
          message: 'Already joined community',
          user: existing.user,
          community: existing.community,
        };
      }

      // Save join
      const join = this.repo.create({
        user: {id: dto.user_id},
        community: {id: dto.community_id},
      });
      const saved = await this.repo.save(join);

      // ✅ Find the community's channel
      const channel = await this.channelRepository.findOne({
        where: {
          community: {id: dto.community_id},
          chatType: 'community',
        },
      });

      // ✅ Add user as chat participant if not already
      if (channel) {
        const existingChatUser = await this.chatUserRepository.findOne({
          where: {
            channel: {id: channel.id},
            user: {id: dto.user_id},
          },
        });

        if (!existingChatUser) {
          const chatUser = this.chatUserRepository.create({
            channel: {id: channel.id},
            user: {id: dto.user_id},
          });
          await this.chatUserRepository.save(chatUser);
        }
      }

      // Load full user & community details again
      const full = await this.repo.findOne({
        where: {id: saved.id},
        relations: ['user', 'community'],
      });

      return {
        message: 'Joined community and added to channel',
        user: full.user,
        community: full.community,
      };
    }

    // ❌ Leave community
    else if (dto.status === 0) {
      if (existing) {
        // Remove the join
        await this.repo.remove(existing);

        // Also remove from chat_user
        const channel = await this.channelRepository.findOne({
          where: {
            community: {id: dto.community_id},
            chatType: 'community',
          },
        });

        if (channel) {
          const existingChatUser = await this.chatUserRepository.findOne({
            where: {
              channel: {id: channel.id},
              user: {id: dto.user_id},
            },
          });

          if (existingChatUser) {
            await this.chatUserRepository.remove(existingChatUser);
          }
        }

        return {message: 'Left community and removed from channel'};
      }

      return {message: 'No existing join found to remove'};
    }
  }



  findAll() {
    return this.repo.find({
      relations: ['user', 'community'],
    });
  }

  findByUser(user_id: number) {
    return this.repo.find({
      where: { user: { id: user_id } },
      relations: ['community'],
    });
  }
}
