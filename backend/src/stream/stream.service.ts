import { Injectable } from '@nestjs/common';
import { AuthService } from '../auth/auth.service';
import * as fs from 'fs';
import * as path from 'path';
import { spawn } from 'child_process';
import { google } from 'googleapis';
import { GoogleAuthService } from 'src/google-auth/google-auth.service';

@Injectable()
export class StreamService {
  private ffmpegProcess = null;
  async handleVideoUpload(streamUrl: string, videoChunk: string, broadcastId: string) {
    const chunkPath = path.join(__dirname, 'uploads', `${broadcastId}.webm`);

    if (!this.ffmpegProcess) {
      this.ffmpegProcess = spawn('ffmpeg', [
        '-re',                      // Read input at native frame rate
        '-f', 'webm',               // Input format
        '-i', 'pipe:0',             // Input from stdin
        '-c:v', 'libx264',          // Video codec
        '-preset', 'veryfast',      // Encoder preset
        '-b:v', '2500k',            // Video bitrate
        '-maxrate', '2500k',        // Max video bitrate
        '-bufsize', '5000k',        // Buffer size
        '-c:a', 'aac',              // Audio codec
        '-ar', '44100',             // Audio sample rate
        '-b:a', '160k',             // Audio bitrate
        '-f', 'flv',                // Output format
      
        streamUrl
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
}
