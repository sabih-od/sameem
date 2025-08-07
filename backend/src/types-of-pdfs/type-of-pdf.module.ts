import { Module } from '@nestjs/common';
import { DatabaseModule } from "../database/database.module";
import { typeProviders } from "./type-of-pdf.provider";
import { TypeOfPDFController } from './type-of-pdf.controller';
import { TypeOfPdfService } from './type-of-pdf.service';
@Module({
    imports: [DatabaseModule],
    controllers: [TypeOfPDFController],
    providers: [TypeOfPdfService, ...typeProviders],
    exports: [TypeOfPdfService],
})
export class TypeOfPDFModule { }
