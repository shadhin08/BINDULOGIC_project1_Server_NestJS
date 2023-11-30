import { Module } from '@nestjs/common';
import { RentAreaService } from './rent-area.service';
import { RentAreaController } from './rent-area.controller';

@Module({
  controllers: [RentAreaController],
  providers: [RentAreaService],
})
export class RentAreaModule {}
