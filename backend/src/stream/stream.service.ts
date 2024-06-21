import { Inject, Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { spawn } from 'child_process';
import { Repository } from 'typeorm';
import { Stream } from 'src/google-auth/entities/stream.entity';
import axios from 'axios';

@Injectable()
export class StreamService {
  private ffmpegProcess = null;
  constructor(
    @Inject('STREAM_REPOSITORY')
    private readonly streamRepository: Repository<Stream>,
  ) { }
  async handleVideoUpload(
    videoChunk: string
  ) {
    const latestStream = await this.streamRepository
      .createQueryBuilder('stream')
      .orderBy('stream.id', 'DESC')
      .getOne();
    const chunkPath = path.join(__dirname, 'uploads', `${latestStream.broad_cast_id}.webm`);

    if (!this.ffmpegProcess) {
      this.ffmpegProcess = spawn('ffmpeg', [
        '-re',
        '-f', 'webm',
        '-i', 'pipe:0',
        '-c:v', 'libx264',
        '-preset', 'ultrafast',
        '-b:v', '3000k',
        '-maxrate', '1000k',
        '-bufsize', '2500k',
        '-c:a', 'aac',
        '-ar', '44100',
        '-b:a', '128k',
        '-f', 'flv',

        latestStream.stream_url
      ]);

      this.ffmpegProcess.stdin.on('error', (e) => {
        // console.error('FFmpeg stdin error:', e);
      });

      this.ffmpegProcess.stderr.on('data', (data) => {
        // console.error('FFmpeg stderr:', data.toString());
      });

      this.ffmpegProcess.on('close', (code) => {
        // console.log(`FFmpeg process closed with code ${code}`);
        this.ffmpegProcess = null;
      });
    }

    fs.createReadStream(videoChunk).pipe(this.ffmpegProcess.stdin, { end: false });
  }

  async stopBroadcast() {
    if (this.ffmpegProcess) {
      this.ffmpegProcess.kill('SIGINT'); // Gracefully stop ffmpeg process
      this.ffmpegProcess = null;
    }
  }
  async getLiveStream(): Promise<any> {
    const latestStream = await this.streamRepository
      .createQueryBuilder('stream')
      .orderBy('stream.id', 'DESC')
      .getOne();
    const apiUrl = `https://www.googleapis.com/youtube/v3/search?part=id&type=video&eventType=live&key=${latestStream.youtube_api_key}&channel_id=${latestStream.youtube_channel_id}&maxResults=1&order=date`;

    try {
      const response = await axios.get(apiUrl);
      const data: any = response.data;
      const liveEvent = (data as any)?.items?.[0];

      if (!liveEvent) {
        return false;
      }

      const videoId = liveEvent.id.videoId;
      if (videoId) {
        const embedUrl = 'https://www.youtube.com/embed/' + videoId + '?autoplay=1';
        return embedUrl;
      } else {
        return data;
      }
    } catch (error) {
      throw new Error(`Error in fetching live event: ${error.message}`);
    }
  }


}
