import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    Request,
    Query,
    UseGuards,
    UploadedFile, ParseFilePipe, BadRequestException, UseInterceptors, MaxFileSizeValidator
} from '@nestjs/common';
import { QuotationsService } from './quotations.service';
import { CreateQuotationDto } from './dto/create-quotation.dto';
import { UpdateQuotationDto } from './dto/update-quotation.dto';
import {ApiBearerAuth, ApiBody, ApiConsumes, ApiQuery, ApiTags} from "@nestjs/swagger";
import {Between} from "typeorm";
import {AuthGuard} from "../auth/auth.guard";
import {deleteFileFromUploads, handleUploadOnCreate, handleUploadOnUpdate} from "../helpers/helper";
import {FileInterceptor} from "@nestjs/platform-express";

@ApiTags('Quotations')
@ApiBearerAuth()
@UseGuards(AuthGuard)
@Controller('quotations')
    export class QuotationsController {
    constructor(private readonly quotationsService: QuotationsService) {}

    @UseInterceptors(FileInterceptor('audio'))
    @ApiConsumes('multipart/form-data')
    @ApiConsumes('application/json')
    @ApiBody({
        schema: {
            type: 'object',
            properties: {
                title: {type: 'string'},
                description: {type: 'string'},
                author: {type: 'string'},
                audio: {type: 'string', format: 'binary'}
            }
        }
    })
    @Post()
    async create(@Body() createQuotationDto: CreateQuotationDto, @UploadedFile(
        new ParseFilePipe({
            validators: [
                new MaxFileSizeValidator({maxSize: 100000000})
            ]
        })
    ) audio: Express.Multer.File) {
        //audio uploads
        if (audio) {
            try {
                createQuotationDto.audio = await handleUploadOnCreate({}, [audio], '/uploads/quotations/audios/');
            } catch (error) {
                throw new BadRequestException(error.message);
            }
        }

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

    @UseInterceptors(FileInterceptor('audio'))
    @ApiConsumes('multipart/form-data')
    @ApiConsumes('application/json')
    @ApiBody({
        schema: {
            type: 'object',
            properties: {
                title: {type: 'string'},
                description: {type: 'string'},
                author: {type: 'string'},
                audio: {type: 'string', format: 'binary'}
            }
        }
    })
    @Patch(':id')
    async update(@Param('id') id: string, @Body() updateQuotationDto: UpdateQuotationDto, @UploadedFile(
        new ParseFilePipe({
            validators: [
                new MaxFileSizeValidator({maxSize: 100000000})
            ]
        })
    ) audio: Express.Multer.File) {
        let quotation = await this.quotationsService.findOne(+id);
        if (quotation.error) {
            return {
                success: false,
                message: quotation.error,
                data: [],
            }
        }

        //audio uploads
        if (audio) {
            try {
                updateQuotationDto.audio = await handleUploadOnUpdate({}, [audio], quotation.audio, '/uploads/quotations/audios/');
            } catch (error) {
                throw new BadRequestException(error.message);
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

        // Delete uploaded file
        await deleteFileFromUploads(process.env.APP_URL + ':' + process.env.PORT, quotation.audio);

        let res = await this.quotationsService.remove(+id);

        return {
            success: !res.error,
            message: res.error ? res.error : 'Quotation deleted successfully!',
            data: res.error ? [] : res,
        }
    }
}
