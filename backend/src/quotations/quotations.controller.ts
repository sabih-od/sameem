import {Controller, Get, Post, Body, Patch, Param, Delete, Request, Query, UseGuards} from '@nestjs/common';
import { QuotationsService } from './quotations.service';
import { CreateQuotationDto } from './dto/create-quotation.dto';
import { UpdateQuotationDto } from './dto/update-quotation.dto';
import {ApiBearerAuth, ApiQuery, ApiTags} from "@nestjs/swagger";
import {Between} from "typeorm";
import {AuthGuard} from "../auth/auth.guard";

@ApiTags('Quotations')
@ApiBearerAuth()
@UseGuards(AuthGuard)
@Controller('quotations')
    export class QuotationsController {
    constructor(private readonly quotationsService: QuotationsService) {}

    @Post()
    async create(@Body() createQuotationDto: CreateQuotationDto) {
        createQuotationDto.created_at = Date.now().toString();
        let res = await this.quotationsService.create(createQuotationDto);

        return {
            success: !res.error,
            message: res.error ? res.error : 'Quotation created successfully!',
            data: res.error ? [] : res,
        }
    }

    @ApiQuery({ name: 'page', required: false})
    @ApiQuery({ name: 'limit', required: false})
    @Get()
    async findAll(@Request() req, @Query('page') page?: number, @Query('limit') limit?: number) {
        let res = await this.quotationsService.findAll(page, limit);

        return {
            success: true,
            message: '',
            ...res
        }
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        let res = await this.quotationsService.findOne(+id);

        return {
            success: !res.error,
            message: res.error ? res.error : '',
            data: res.error ? [] : res,
        }
    }

    @Get('/get/quotation-of-the-day')
    async getQuotationOfThaDay() {
        let start = new Date();
        start.setUTCHours(0,0,0,0);
        let end = new Date();
        end.setUTCHours(23,59,59,999);

        let res = await this.quotationsService.findAll(1, 1, {
            where: {
                created_at: Between(start.getTime(), end.getTime())
            }
        });

        if (res.data && res.data.length == 1) {
            return {
                success: !res.error,
                message: res.error ? res.error : '',
                data: res.error ? [] : res.data[0],
            }
        } else {
            let res = await this.quotationsService.findAll(1, 1);

            return {
                success: !(res.data.length != 1),
                message: (res.data.length == 1) ? '' : 'Quotation not found.',
                data: (res.data.length == 1) ? res.data[0] : [],
            }
        }
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() updateQuotationDto: UpdateQuotationDto) {
        let quotation = await this.quotationsService.findOne(+id);
        if (quotation.error) {
            return {
                success: false,
                message: quotation.error,
                data: [],
            }
        }

        let res = await this.quotationsService.update(+id, updateQuotationDto);

        return {
            success: !res.error,
            message: res.error ? res.error : 'Quotation updated successfully!',
            data: res.error ? [] : res,
        }
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        let quotation = await this.quotationsService.findOne(+id);
        if (quotation.error) {
            return {
                success: false,
                message: quotation.error,
                data: [],
            }
        }

        let res = await this.quotationsService.remove(+id);

        return {
            success: !res.error,
            message: res.error ? res.error : 'Quotation deleted successfully!',
            data: res.error ? [] : res,
        }
    }
}
