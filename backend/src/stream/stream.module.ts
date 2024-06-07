import { Module } from "@nestjs/common";
import { StreamController } from "./stream.controller";
import { StreamService } from "./stream.service";
import { GoogleAuthService } from "src/google-auth/google-auth.service";

@Module({
    controllers: [StreamController],
    providers: [StreamService,GoogleAuthService],
})

export class StreamModule { }