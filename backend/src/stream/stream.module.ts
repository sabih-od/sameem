import { Module } from "@nestjs/common";
import { StreamController } from "./stream.controller";
import { StreamService } from "./stream.service";
import { GoogleAuthService } from "src/google-auth/google-auth.service";
import { streamProviders } from "src/google-auth/streams.provider";
import { DatabaseModule } from "src/database/database.module";
import { UploadService } from "./multer.config";

@Module({
    imports:[DatabaseModule],
    controllers: [StreamController],
    providers: [StreamService,GoogleAuthService,...streamProviders,UploadService],
    exports:[...streamProviders]
})

export class StreamModule { }