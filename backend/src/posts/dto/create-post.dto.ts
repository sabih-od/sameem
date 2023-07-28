import {IsNotEmpty, IsUrl} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class CreatePostDto {
    @ApiProperty({ example: 1 })
    category_id: number;

    @IsNotEmpty()
    @ApiProperty({ example: 'Post title' })
    title: string;

    @ApiProperty({ example: 'Post description' })
    description: string;

    @IsUrl()
    @ApiProperty({ example: 'https://www.google.com' })
    url: string;

    @ApiProperty({ example: '12-12-2023' })
    date: string;

    @ApiProperty({ example: '12:00 AM' })
    time: string;

    @ApiProperty({ example: 'https://localhost/post/videos/video.mp4' })
    video: string;

    @ApiProperty({ example: 'https://localhost/post/audios/audio.wav' })
    audio: string;

    @ApiProperty({ example: 'https://localhost/post/images/image.jpg' })
    image: string;

    @ApiProperty({ example: 'https://localhost/post/pdfs/pdf.pdf' })
    pdf: string;

    created_at: string;
}
