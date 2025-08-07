import { Inject, Injectable } from '@nestjs/common';
import { google } from 'googleapis';
import { Repository } from 'typeorm';
import { CreateStreamDto } from './dto/create-strem.dto';
import { Stream } from './entities/stream.entity';

@Injectable()
export class GoogleAuthService {
  private oauth2Client: any;

  constructor(
    @Inject('STREAM_REPOSITORY') private streamRepository: Repository<Stream>
  ) {
    const { google } = require('googleapis');
    this.oauth2Client = new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
      'http://localhost:4000/auth/google/callback'
    );
  }

  async setCredentials(accessToken: string, refreshToken: string) {
    this.oauth2Client.setCredentials({ access_token: accessToken, refresh_token: refreshToken });
  }

  getOauth2Client() {
    return this.oauth2Client;
  }

  async startBroadcast() {

    const youtube = google.youtube({
      version: 'v3',
      auth: this.oauth2Client,
    });

    const startTime = new Date(Date.now()).toISOString();

    const liveBroadcastInsertResponse = await youtube.liveBroadcasts.insert({
      part: ['id,snippet,contentDetails,status'],
      requestBody: {
        snippet: {
          title: `New Video: ${new Date().toISOString()}`,
          scheduledStartTime: startTime,
          description: 'A description of your video stream. This field is optional.',
        },
        contentDetails: {
          recordFromStart: true,
          enableAutoStart: false,
          monitorStream: {
            enableMonitorStream: false,
          },
        },
        status: {
          privacyStatus: 'public',
          selfDeclaredMadeForKids: true,
          lifeCycleStatus: "live",
        },
      }
    });

    const broadcastId = liveBroadcastInsertResponse?.data?.id;

    const liveStreamsInsertResponse = await youtube.liveStreams.insert({
      part: ['id,snippet,cdn,contentDetails,status'],
      requestBody: {
        snippet: {
          title: "Your new video stream's name",
          description: 'A description of your video stream. This field is optional.',
        },
        cdn: {
          frameRate: 'variable',
          ingestionType: 'rtmp',
          resolution: 'variable',
        },
        contentDetails: {
          isReusable: true,
        },
        status: {
          streamStatus: "active"
        },
      }
    });

    const streamId = liveStreamsInsertResponse?.data?.id;

    await youtube.liveBroadcasts.bind({
      part: ['id,snippet,contentDetails,status'],
      id: broadcastId,
      streamId: streamId
    });

    setTimeout(() => {
      const liveVideo = youtube.liveBroadcasts.transition({
        part: ['snippet,status'],
        broadcastStatus: 'live',
        id: broadcastId,
      });
    }, 10000);

    const currentDate = new Date().toISOString().slice(0, 19).replace('T', ' ');
    const streamUrl = `${liveStreamsInsertResponse.data.cdn.ingestionInfo.ingestionAddress}/${liveStreamsInsertResponse.data.cdn.ingestionInfo.streamName}`;
    const stream = new Stream();
    stream.auth_token = this.oauth2Client.credentials.access_token;
    stream.stream_url = streamUrl,
    stream.stream_sharing_url = `https://studio.youtube.com/video/${broadcastId}`
    stream.broad_cast_id = broadcastId
    stream.created_at = currentDate
    await this.streamRepository.save(stream);

    return { broadcastId, data: liveStreamsInsertResponse.data.cdn.ingestionInfo };
  }


}
