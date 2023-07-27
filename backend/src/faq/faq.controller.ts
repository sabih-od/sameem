import {Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards} from '@nestjs/common';
import { FaqService } from './faq.service';
import { CreateFaqDto } from './dto/create-faq.dto';
import { UpdateFaqDto } from './dto/update-faq.dto';
import {ApiBearerAuth, ApiTags} from "@nestjs/swagger";
import {AuthGuard} from "../auth/auth.guard";

@ApiTags('FAQs')
@ApiBearerAuth()
@UseGuards(AuthGuard)
@Controller('faq')
export class FaqController {
  constructor(private readonly faqService: FaqService) {}

    @Post()
    async create(@Body() createFaqDto: CreateFaqDto) {
        createFaqDto.created_at = Date.now().toString();
        let res = await this.faqService.create(createFaqDto);

        return {
            success: !res.error,
            message: res.error ? res.error : 'Faq created successfully!',
            data: res.error ? [] : res,
        }
    }

    @Get()
    async findAll(@Query('page') page?: number, @Query('limit') limit?: number) {
        let res = await this.faqService.findAll(page, limit);

        return {
            success: true,
            message: '',
            ...res
        }
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        let res = await this.faqService.findOne(+id);

        return {
            success: !res.error,
            message: res.error ? res.error : '',
            data: res.error ? [] : res,
        }
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() updateFaqDto: UpdateFaqDto) {
        let faq = await this.faqService.findOne(+id);
        if (faq.error) {
            return {
                success: false,
                message: faq.error,
                data: [],
            }
        }

        let res = await this.faqService.update(+id, updateFaqDto);

        return {
            success: !res.error,
            message: res.error ? res.error : 'Faq updated successfully!',
            data: res.error ? [] : res,
        }
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        let faq = await this.faqService.findOne(+id);
        if (faq.error) {
            return {
                success: false,
                message: faq.error,
                data: [],
            }
        }

        let res = await this.faqService.remove(+id);

        return {
            success: !res.error,
            message: res.error ? res.error : 'Faq deleted successfully!',
            data: res.error ? [] : res,
        }
    }
}
