import { SubscribeMessage, WebSocketGateway, WebSocketServer, OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
import { Socket, Server } from 'socket.io';
import { spawn, ChildProcess } from 'child_process';
import { StreamService } from 'src/stream/stream.service';

@WebSocketGateway({ cors: { origin: '*' } })
export class StreamGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
    @WebSocketServer() server: Server;
    private logger: Logger = new Logger('Stream Gateway');
    private ffmpegProcess: ChildProcess | null = null; // Store FFmpeg process

    constructor(private readonly streamService: StreamService) { }

    @SubscribeMessage('youtubeStream')
    async handleVideo(client: Socket, data: Buffer) {
        try {
            const streamUrl = await this.streamService.getStreamUrl();
            if (!this.ffmpegProcess) {
                // Start FFmpeg process if not already started
                this.ffmpegProcess = spawn('ffmpeg', [
                    '-re',
                    '-f', 'webm',
                    '-i', 'pipe:0',
                    '-c:v', 'libx264',
                    '-preset', 'veryfast',
                    '-b:v', '3000k',
                    '-maxrate', '3000k',
                    '-bufsize', '6000k',
                    '-c:a', 'aac',
                    '-ar', '44100',
                    '-b:a', '160k',
                    '-f', 'flv',
                    streamUrl // Use streamUrl as output destination
                ]);

                this.ffmpegProcess.stdin.on('error', (e) => {
                    this.logger.error('FFmpeg stdin error:', e);
                });

                this.ffmpegProcess.stderr.on('data', (payload) => {
                    this.logger.error('FFmpeg stderr:', payload.toString());
                });

                this.ffmpegProcess.on('close', (code) => {
                    this.logger.log(`FFmpeg process closed with code ${code}`);
                    this.ffmpegProcess = null;
                });
            }

            // Write video chunk from client to FFmpeg process stdin
            if (this.ffmpegProcess) {
                this.ffmpegProcess.stdin.write(data);
            }

            // Optionally, emit acknowledgment back to the client
            client.emit('chunk-received', { success: true });
        } catch (error) {
            this.logger.error('Error processing video chunk:', error);
            // Optionally, emit error back to the client
            client.emit('chunk-received', { success: false, error: error.message });
        }
    }

    @SubscribeMessage('stopStreaming')
    handleStopStreaming(client: Socket) {
        try {
            if (this.ffmpegProcess) {
                this.ffmpegProcess.stdin.end();
                this.ffmpegProcess.kill();
                this.ffmpegProcess = null;
            }
            client.emit('streaming-stopped', { success: true });
        } catch (error) {
            this.logger.error('Error stopping streaming:', error);
            // Emit error back to the client
            client.emit('streaming-stopped', { success: false, error: error.message });
        }
    }

    afterInit(server: Server) {
        this.logger.log('Init');
    }

    handleConnection(client: Socket, ...args: any[]) {
        this.logger.log(`Client connected: ${client.id}`);
    }

    handleDisconnect(client: Socket) {
        this.logger.log(`Client disconnected: ${client.id}`);
    }
}
