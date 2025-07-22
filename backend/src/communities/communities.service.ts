import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Community } from './entities/communities.entity';
import { CreateCommunityDto } from './dto/create-community.dto';
import { UpdateCommunityDto } from './dto/update-community.dto';
import { Reason } from 'src/reasons/entities/reason.entity';
import { CommunityCategory } from './entities/community-category.entity';
import { User } from 'src/users/entities/user.entity';
import {CommunityJoin} from "../community-joins/entities/community-join.entity";
import {ChatService} from "../chat/chat.service";
    
@Injectable()
export class CommunitiesService {
   constructor(
    @Inject('COMMUNITY_REPOSITORY')
    private communityRepo: Repository<Community>,

    @Inject('REASON_REPOSITORY')
    private reasonRepo: Repository<Reason>,

     @Inject('COMMUNITY_CATEGORY_REPOSITORY')
    private communityCategoryRepo: Repository<CommunityCategory>,

    @Inject('COMMUNITY_JOIN_REPOSITORY')
    private communityJoinRepo: Repository<CommunityJoin>,

    private readonly chatService: ChatService,
  ) {}

//   async create(dto: CreateCommunityDto) {
//   const community = new Community();
//   community.name = dto.name;
//   community.description = dto.description;
//   community.image = dto.image;
//
//   if (dto.created_by) {
//     community.created_by = { id: dto.created_by } as User;
//   }
//
//   if (dto.reason_ids?.length) {
//     community.reasons = await this.reasonRepo.findByIds(dto.reason_ids);
//   }
//
//   if (dto.community_category_id) {
//     community.community_category = await this.communityCategoryRepo.findOneBy({
//       id: dto.community_category_id
//     });
//   }
//
//   return this.communityRepo.save(community);
// }

  async create(dto: CreateCommunityDto) {
    const community = new Community();
    community.name = dto.name;
    community.description = dto.description;
    community.image = dto.image;

    if (dto.created_by) {
      community.created_by = { id: dto.created_by } as User;
    }

    if (dto.reason_ids?.length) {
      community.reasons = await this.reasonRepo.findByIds(dto.reason_ids);
    }

    if (dto.community_category_id) {
      community.community_category = await this.communityCategoryRepo.findOneBy({
        id: dto.community_category_id
      });
    }

    // Step 1: Save the new community
    const savedCommunity = await this.communityRepo.save(community);

    // Step 2: Automatically join the creator to the community
    if (dto.created_by) {
      const join = this.communityJoinRepo.create({
        user: { id: dto.created_by },
        community: savedCommunity,
      });
      await this.communityJoinRepo.save(join);

      // create channel for community
      await this.chatService.createChannel({
        chatType: 'community',
        communityId: savedCommunity.id,
        participantIds: [dto.created_by],
      });
    }

    return {
      message: 'Community created and user joined successfully',
      community: savedCommunity,
    };
  }


  findAll() {
    return this.communityRepo.find({ relations: ['reasons', 'community_category'] });
  }

  findOne(id: number) {
    return this.communityRepo.findOne({
      where: { id },
      relations: ['reasons', 'community_category', 'community_posts'],
    });
  }

//   async update(id: number, dto: UpdateCommunityDto) {
//   const community = await this.communityRepo.findOne({
//     where: { id },
//     relations: ['reasons', 'community_category']
//   });
//
//   if (!community) {
//     throw new Error(`Community with ID ${id} not found`);
//   }
//
//   Object.assign(community, dto);
//
//   if (dto.reason_ids) {
//     const reasons = dto.reason_ids.length
//       ? await this.reasonRepo.findByIds(dto.reason_ids)
//       : [];
//     community.reasons = reasons;
//   }
//
//   if (dto.community_category_id !== undefined) {
//     const category = dto.community_category_id
//       ? await this.communityCategoryRepo.findOneBy({ id: dto.community_category_id })
//       : null;
//     community.community_category = category;
//   }
//
//   try {
//     return await this.communityRepo.save(community);
//   } catch (error) {
//     throw new Error(`Failed to update community: ${error.message}`);
//   }
// }
  async update(id: number, dto: UpdateCommunityDto) {
    const community = await this.communityRepo.findOne({
      where: { id },
      relations: ['reasons', 'community_category'],
    });

    if (!community) {
      throw new Error(`Community with ID ${id} not found`);
    }

    Object.assign(community, {
      name: dto.name ?? community.name,
      description: dto.description ?? community.description,
      image: dto.image ?? community.image,
    });

    if (dto.hasOwnProperty('reason_ids')) {
      if (Array.isArray(dto.reason_ids) && dto.reason_ids.length > 0) {
        const reasons = await this.reasonRepo.findByIds(dto.reason_ids);
        community.reasons = reasons;
      } else {
        community.reasons = [];
      }
    }

    // Update category if provided
    if (dto.hasOwnProperty('community_category_id')) {
      if (dto.community_category_id) {
        const category = await this.communityCategoryRepo.findOneBy({ id: dto.community_category_id });
        community.community_category = category;
      } else {
        community.community_category = null;
      }
    }

    try {
      return await this.communityRepo.save(community);
    } catch (error) {
      throw new Error(`Failed to update community: ${error.message}`);
    }
  }

// async remove(id: number) {
//   const exists = await this.communityRepo.exist({ where: { id } });
//   if (!exists) {
//     throw new Error(`Community with ID ${id} not found`);
//   }
//
//   try {
//     const result = await this.communityRepo.delete(id);
//     if (result.affected === 0) {
//       throw new Error(`No community was deleted (ID: ${id})`);
//     }
//     return { success: true, message: `Community ${id} deleted` };
//   } catch (error) {
//     throw new Error(`Failed to delete community: ${error.message}`);
//   }
// }

  async remove(id: number) {
    // const exists = await this.communityRepo.exist({ where: { id } });
    const exists = await this.communityRepo.existsBy({ id });
    if (!exists) {
      throw new Error(`Community with ID ${id} not found`);
    }

    try {
      // Step 1: Delete related community joins
      await this.communityJoinRepo.delete({ community: { id } });

      // Step 2: Delete the community
      const result = await this.communityRepo.delete(id);
      if (result.affected === 0) {
        throw new Error(`No community was deleted (ID: ${id})`);
      }

      return { success: true, message: `Community ${id} and related joins deleted` };
    } catch (error) {
      throw new Error(`Failed to delete community: ${error.message}`);
    }
  }

async findByCategory(categoryId: number) {
  return this.communityRepo.find({
    where: {
      community_category: {
        id: categoryId,
      },
    },
    relations: ['reasons', 'community_category', 'community_posts'],
  });
}

  async getCommunitiesByUser(userId: number) {
    return this.communityRepo.find({
      where: { created_by: { id: userId } },
      relations: ['community_category', 'reasons'], // Add any other needed relations
    });
  }

}
