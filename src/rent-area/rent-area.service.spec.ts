import { Test, TestingModule } from '@nestjs/testing';
import { RentAreaService } from './rent-area.service';

describe('RentAreaService', () => {
  let service: RentAreaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RentAreaService],
    }).compile();

    service = module.get<RentAreaService>(RentAreaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
