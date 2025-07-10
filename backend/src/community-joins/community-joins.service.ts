import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CommunityJoin } from './entities/community-join.entity';
import { CreateCommunityJoinDto } from './dto/create-community-join.dto';

@Injectable()
export class CommunityJoinsService {
  constructor(
    @Inject('COMMUNITY_JOIN_REPOSITORY')
    private repo: Repository<CommunityJoin>,
  ) {}

  async create(dto: CreateCommunityJoinDto) {
    const existing = await this.repo.findOne({
      where: {
        user: { id: dto.user_id },
        community: { id: dto.community_id },
      },
    });

    if (dto.status === 1) {
      if (existing) return existing;

      const join = this.repo.create({
        user: { id: dto.user_id },
        community: { id: dto.community_id },
      });
      return this.repo.save(join);
    } else if (dto.status === 0) {
      if (existing) {
        await this.repo.remove(existing);
        return { message: 'Left community successfully' };
      }
      return { message: 'No existing join found to remove' };
    }

    return { message: 'Invalid status value (must be 0 or 1)' };
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
