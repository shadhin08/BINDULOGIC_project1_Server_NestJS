import { Test, TestingModule } from '@nestjs/testing';
import { RentPostService } from './rent-post.service';

describe('RentPostService', () => {
  let service: RentPostService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RentPostService],
    }).compile();

    service = module.get<RentPostService>(RentPostService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
