import { Test, TestingModule } from '@nestjs/testing';
import { RentPostController } from './rent-post.controller';
import { RentPostService } from './rent-post.service';

describe('RentPostController', () => {
  let controller: RentPostController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RentPostController],
      providers: [RentPostService],
    }).compile();

    controller = module.get<RentPostController>(RentPostController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
