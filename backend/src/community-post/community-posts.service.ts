import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CommunityPost } from './entities/community-post.entity';
import { CreateCommunityPostDto } from './dto/create-community-post.dto';
import { UpdateCommunityPostDto } from './dto/update-community-post.dto';

@Injectable()
export class CommunityPostsService {
  constructor(
    @Inject('COMMUNITY_POST_REPOSITORY')
    private repo: Repository<CommunityPost>,
  ) {}

  create(dto: CreateCommunityPostDto) {
    const post = this.repo.create({
      text: dto.text,
      image: dto.image,
      community: { id: dto.community_id },
    });
    return this.repo.save(post);
  }

  findAll() {
    return this.repo.find({ relations: ['community'] });
  }

  findOne(id: number) {
    return this.repo.findOne({ where: { id }, relations: ['community'] });
  }

  update(id: number, dto: UpdateCommunityPostDto) {
    return this.repo.update(id, {
      ...dto,
      community: dto.community_id ? { id: dto.community_id } : undefined,
    });
  }

  remove(id: number) {
    return this.repo.delete(id);
  }

  async findByCommunityId(communityId: number): Promise<CommunityPost[]> {
    return this.repo.find({
      where: {
        community: { id: communityId },
      },
      relations: ['community'],
      order: {
        created_at: 'DESC',
      },
    });
  }
}
