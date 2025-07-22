import {
    Controller,
    Post,
    Body,
    Get,
    Param,
    Put,
    Delete,
    UseInterceptors,
    UploadedFile, UseGuards,
    Req,
} from '@nestjs/common';
import {ChatService} from "./chat.service";
import {CreateChannelDto} from "./dto/create-channel.dto";
import {SendMessageDto} from "./dto/send-message.dto";
import { ApiTags, ApiOkResponse, ApiConsumes, ApiBody , ApiOperation, ApiParam, ApiBearerAuth} from '@nestjs/swagger';
import {AuthGuard} from "../auth/auth.guard";

@ApiTags('Chat')
@Controller('chat')
export class ChatController {

    constructor(private readonly chatService: ChatService) {}


    @Post('channel')
    @ApiOperation({ summary: 'Create a new channel (private or community)' })
    createChannel(@Body() dto: CreateChannelDto) {
        return this.chatService.createChannel(dto);
    }

    @Get('channels/:userId')
    @ApiOperation({ summary: 'Get all channels for a user' })
    getUserChannels(@Param('userId') userId: number) {
        return this.chatService.getUserChannels(userId);
    }

    @ApiParam({ name: 'userId', required: true, description: 'User ID' })
    @Post('message')
    @ApiOperation({ summary: 'Send a message' })
    sendMessage(@Body() dto: SendMessageDto) {
        return this.chatService.sendMessage(dto);
    }

    @ApiBearerAuth()
    @UseGuards(AuthGuard)
    @ApiParam({ name: 'channelId', required: true, description: 'Channel ID' })
    @Get('messages/:channelId')
    @ApiOperation({ summary: 'Get all messages in a channel' })
    getMessages(@Param('channelId') channelId: number, @Req() req) {
        const userId = req.user.id;
        return this.chatService.getMessages(channelId, userId);
    }


}
