import { PartialType } from '@nestjs/mapped-types';
import { CreateSubscriptionDto } from './create-subscription.dto';
import { IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

// export class UpdateSubscriptionDto extends PartialType(CreateSubscriptionDto) { }
export class UpdateSubscriptionDto  {
    @IsNotEmpty()
    @ApiProperty({ example: 1 })
    @IsNumber()
    is_active: number;
 }
