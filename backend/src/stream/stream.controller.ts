import { Body, Controller, Get, Post, Query, Req, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { StreamService } from './stream.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { UploadService } from './multer.config';
import { response } from 'express';
// import { socketIoServer } from 'src/main';

@Controller('stream')
export class StreamController {
  constructor(private readonly streamService: StreamService, private readonly uploadService: UploadService) { }

  @Post('upload-video')
  @UseInterceptors(FileInterceptor('video', new UploadService().getUploadConfig()))
  uploadVideo(@UploadedFile() file: Express.Multer.File
    //  @Query('broadcastId') broadcastId: string, @Body('streamUrl') streamUrl: string
  ) {
    // socketIoServer.emit()
    // if (!streamUrl) {
    // console.error('Stream URL is missing in the request body');
    // return res.status(400).send('Stream URL is required');
    // }
    // console.log('Requst', req.file);
    // try {
    //   const videoChunk = file.path;
      // console.log('Video Chunk',videoChunk);

      // await this.streamService.handleVideoUpload(streamUrl, videoChunk, broadcastId);
    //   this.streamService.handleVideoUpload(videoChunk);
    //   return { message: 'Video upload initiated successfully' };
    // } catch (error) {
    //   console.error('Error uploading video:', error);
    //   return { error: 'Failed to upload video' };
    // }
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
