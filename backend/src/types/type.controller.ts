import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { ApiQuery, ApiTags } from "@nestjs/swagger";
import { TypeService } from "./type.service";
import { CreateTypeDto } from "./dto/create-type.dto";

@ApiTags('Types')
@Controller('types')
export class TypeController {
    constructor(private readonly typeService: TypeService) { }
    @Get()
    @ApiQuery({ name: 'page', required: false })
    @ApiQuery({ name: 'limit', required: false })

    async findAll(@Query('page') page?: number, @Query('limit') limit?: number) {
        let res = await this.typeService.findAll(page, limit,{
            relations: ['typeOfPdfs']
        });
        return {
            success: true,
            message: '',
            ...res
        }
    }

    @Post()
    async create(@Body() createTypeDto: CreateTypeDto) {

        let res = await this.typeService.create(createTypeDto);

        return {
            success: !res.error,
            message: res.error ? res.error : 'Type created successfully!',
            data: res.error ? [] : res,
        }
    }



}