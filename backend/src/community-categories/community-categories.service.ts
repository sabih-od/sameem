// src/community-categories/community-categories.service.ts

import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CommunityCategory } from './entities/community-category.entity';
import { CreateCommunityCategoryDto } from './dto/create-community-category.dto';
import { UpdateCommunityCategoryDto } from './dto/update-community-category.dto';

@Injectable()
export class CommunityCategoriesService {
  constructor(
    @Inject('COMMUNITY_CATEGORY_REPOSITORY')
    private repo: Repository<CommunityCategory>,
  ) {}

  create(dto: CreateCommunityCategoryDto) {
    const category = this.repo.create(dto);
    return this.repo.save(category);
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return this.repo.findOneBy({ id });
  }

  update(id: number, dto: UpdateCommunityCategoryDto) {
    return this.repo.update(id, dto);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}
