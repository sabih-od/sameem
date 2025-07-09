import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReasonsService } from './reasons.service';
import { ReasonsController } from './reasons.controller';
import { Reason } from './entities/reason.entity';
import { DatabaseModule } from 'src/database/database.module';
import { reasonProviders } from './reason.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [ReasonsController],
  providers: [ReasonsService, ...reasonProviders],
})
export class ReasonsModule {}
