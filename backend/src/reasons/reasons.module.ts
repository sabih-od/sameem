import { Module } from '@nestjs/common';
import { ReasonsService } from './reasons.service';
import { ReasonsController } from './reasons.controller';
import { reasonProviders } from './reason.provider';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [ReasonsController],
  providers: [ReasonsService, ...reasonProviders],
  exports: [...reasonProviders],
})
export class ReasonsModule {}
