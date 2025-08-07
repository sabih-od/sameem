import { Module } from '@nestjs/common';

import { DatabaseModule } from "../database/database.module";
import { typeProviders } from "./type.provider";
import { TypeService } from './type.service';
import { TypeController } from './type.controller';


@Module({
    imports: [DatabaseModule],
    controllers: [TypeController],
    providers: [TypeService, ...typeProviders],
    exports: [TypeService],
})
export class TypeModule { }
