import { Body, Controller, Get, Post, Query, UploadedFile, UseInterceptors } from "@nestjs/common";
import { ApiConsumes, ApiHeader, ApiQuery, ApiTags } from "@nestjs/swagger";
import { TypeOfPdfService } from "./type-of-pdf.service";
import { CreateTypeOfPDFDto } from "./dto/type-of-pdf.dto";
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import { extname } from "path";

@ApiTags('Type Of PDFs')
@Controller('types-of-pdfs')
export class TypeOfPDFController {
    constructor(private readonly typeOfPdfService: TypeOfPdfService) { }
    @Get()
    @ApiQuery({ name: 'page', required: false })
    @ApiQuery({ name: 'limit', required: false })
    @ApiHeader({ name: 'lang', required: false })
    async findAll(@Query('page') page?: number, @Query('limit') limit?: number) {
        let res = await this.typeOfPdfService.findAll(page, limit);
        return {
            success: true,
            message: '',
            ...res
        }
    }

    @Post()
    @UseInterceptors(FileInterceptor('file', {
        storage: diskStorage({
            destination: './uploads/type/',
            filename: (req, file, callback) => {
                const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
                const ext = extname(file.originalname);
                callback(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
            },
        }),
    }))
    @ApiConsumes('multipart/form-data')
    async create(
        @Body() createTypeDto: CreateTypeOfPDFDto,
        @UploadedFile() file: Express.Multer.File
    ) {
        if (file) {
            let app_url = process.env.APP_URL + ':' + process.env.PORT;
            createTypeDto.pdf_url = `${app_url}/uploads/type/${file.filename}`;
        }

        let res = await this.typeOfPdfService.create(createTypeDto);

        return {
            success: !res.error,
            message: res.error ? res.error : 'Type OF PDF created successfully!',
            data: res.error ? [] : res,
        }
    }
}