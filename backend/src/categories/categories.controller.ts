import {Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query} from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import {ApiBearerAuth, ApiTags} from "@nestjs/swagger";
import {AuthGuard} from "../auth/auth.guard";
import {IsNull} from "typeorm";

@ApiTags('Categories')
@ApiBearerAuth()
@UseGuards(AuthGuard)
@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

    @Post()
    async create(@Body() createCategoryDto: CreateCategoryDto) {
        if (createCategoryDto.parent_id) {
            let parent = await this.categoriesService.findOne(+createCategoryDto.parent_id);

            if (parent.error) {
                return {
                    success: false,
                    message: parent.error,
                }
            }
        }

        createCategoryDto.created_at = Date.now().toString();
        let res = await this.categoriesService.create(createCategoryDto);

        return {
            success: !res.error,
            message: res.error ? res.error : 'Category created successfully!',
            data: res.error ? [] : res,
        }
    }

    @Get()
    async findAll(@Query('page') page?: number, @Query('limit') limit?: number) {
        let res = await this.categoriesService.findAll(page, limit, {
            order: {
                created_at: 'DESC'
            },
            relations: ['parent', 'children']
        });

        return {
            success: true,
            message: '',
            ...res
        }
    }

    @Get('get-menu')
    async getMenu() {
        let res = await this.categoriesService.findAll(1, 10000, {
            where: { parent_id: IsNull() },
            relations: ['children']
        });

        return {
            success: true,
            message: '',
            ...res
        }
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        let res = await this.categoriesService.findOne(+id);

        return {
            success: !res.error,
            message: res.error ? res.error : '',
            data: res.error ? [] : res,
        }
    }

    @Post(':id')
    async update(@Param('id') id: string, @Body() updateCategoryDto: UpdateCategoryDto) {
        let category = await this.categoriesService.findOne(+id);
        if (category.error) {
            return {
                success: false,
                message: category.error,
                data: [],
            }
        }

        if (updateCategoryDto.parent_id) {
            if (updateCategoryDto.parent_id == category.id) {
                return {
                    success: false,
                    message: 'Invalid parent id',
                }
            }

            let parent = await this.categoriesService.findOne(+updateCategoryDto.parent_id);

            if (parent.error) {
                return {
                    success: false,
                    message: parent.error,
                }
            }
        }

        let res = await this.categoriesService.update(+id, updateCategoryDto);

        return {
            success: !res.error,
            message: res.error ? res.error : 'Category updated successfully!',
            data: res.error ? [] : res,
        }
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        let category = await this.categoriesService.findOne(+id);
        if (category.error) {
            return {
                success: false,
                message: category.error,
                data: [],
            }
        }

        let res = await this.categoriesService.remove(+id);

        return {
            success: !res.error,
            message: res.error ? res.error : 'Category deleted successfully!',
            data: res.error ? [] : res,
        }
    }

}
