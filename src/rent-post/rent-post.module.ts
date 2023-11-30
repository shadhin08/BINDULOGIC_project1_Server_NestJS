import { Module } from '@nestjs/common';
import { RentPostService } from './rent-post.service';
import { RentPostController } from './rent-post.controller';

@Module({
  controllers: [RentPostController],
  providers: [RentPostService],
})
export class RentPostModule {}
