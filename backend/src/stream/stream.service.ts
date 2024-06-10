import { Inject, Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { spawn } from 'child_process';
import { Repository } from 'typeorm';
import { Stream } from 'src/google-auth/entities/stream.entity';

@Injectable()
export class StreamService {
  private ffmpegProcess = null;
  constructor(
    @Inject('STREAM_REPOSITORY')
    private readonly streamRepository: Repository<Stream>,
  ) {}
  async handleVideoUpload(
    // streamUrl: string,
     videoChunk: string
    //  , broadcastId: string
    ) {
    const latestStream = await this.streamRepository
      .createQueryBuilder('stream')
      .orderBy('stream.id', 'DESC') // Order by ID in descending order
      .getOne();
    const chunkPath = path.join(__dirname, 'uploads', `${latestStream.broad_cast_id}.webm`);

    if (!this.ffmpegProcess) {
      this.ffmpegProcess = spawn('ffmpeg', [
        '-re',                      // Read input at native frame rate
        '-f', 'webm',               // Input format
        '-i', 'pipe:0',             // Input from stdin
        '-c:v', 'libx264',          // Video codec
        '-preset', 'ultrafast',      // Encoder preset
        '-b:v', '3000k',            // Video bitrate
        '-maxrate', '1000k',        // Max video bitrate
        '-bufsize', '2000k',        // Buffer size
        '-c:a', 'aac',              // Audio codec
        '-ar', '44100',             // Audio sample rate
        '-b:a', '128k',             // Audio bitrate
        '-f', 'flv',                // Output format
      
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
}
