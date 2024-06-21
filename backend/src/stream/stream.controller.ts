import { Body, Controller, Get, Post, Query, Req, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { StreamService } from './stream.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { multerConfig } from './multer.config';
import { response } from 'express';

@Controller('stream')
export class StreamController {
  constructor(private readonly streamService: StreamService) { }

  @Post('upload-video')
  @UseInterceptors(FileInterceptor('video', multerConfig))
  async uploadVideo(@UploadedFile() file, @Req() req, @Res() res,
    //  @Query('broadcastId') broadcastId: string, @Body('streamUrl') streamUrl: string
  ) {
    // if (!streamUrl) {
    // console.error('Stream URL is missing in the request body');
    // return res.status(400).send('Stream URL is required');
    // }
    const videoChunk = file.path;
    // await this.streamService.handleVideoUpload(streamUrl, videoChunk, broadcastId);
    const resposne = await this.streamService.handleVideoUpload(videoChunk);
    return resposne;
  }


  @Post('stop-broadcast')
  async stopBroadcast(@Res() res) {
    const response = await this.streamService.stopBroadcast();
    return response;
  }

  @Get('get-live-stream')
  async getLiveStream() {
    return this.streamService.getLiveStream();
  }


}
