import {IsEmail, IsNotEmpty} from 'class-validator';
import {ApiProperty} from "@nestjs/swagger";

export class FCMTokenDto {
    @IsNotEmpty()
    @ApiProperty({ example: 'fweFoukD8TUZEBnzIRSJHn:APA91bF9OCiyv6mQaHyFB7MhXnR53_ZB_IiCvnWBucyKKVr758oidSu4bD4BogAvUWGbua9-tcd4Ekr1tB1pNy3qaCCvA6Z1PK9MJA5Xcuy48NlnKMnewm3CrT_8klih9eoJb42Ysbkm' })
    token: string;
}