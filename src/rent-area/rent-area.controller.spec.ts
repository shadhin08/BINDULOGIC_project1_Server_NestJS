import { Test, TestingModule } from '@nestjs/testing';
import { RentAreaController } from './rent-area.controller';
import { RentAreaService } from './rent-area.service';

describe('RentAreaController', () => {
  let controller: RentAreaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RentAreaController],
      providers: [RentAreaService],
    }).compile();

    controller = module.get<RentAreaController>(RentAreaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
