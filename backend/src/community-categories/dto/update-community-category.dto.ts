import { PartialType } from '@nestjs/mapped-types';
import { CreateCommunityCategoryDto } from './create-community-category.dto';

export class UpdateCommunityCategoryDto extends PartialType(CreateCommunityCategoryDto) {}
