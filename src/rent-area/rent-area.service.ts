import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class RentAreaService {
  constructor(private readonly databaseService: DatabaseService) {}
  async create(createRentAreaDto: Prisma.RentAreaCreateInput) {
    return this.databaseService.rentArea.create({ data: createRentAreaDto });
  }

  async findAll() {
    return this.databaseService.rentArea.findMany({});
  }

  async findOne(name: string) {
    return this.databaseService.rentArea.findUnique({
      where: { area: name },
    });
  }

  async update(name: string, updateRentAreaDto: Prisma.RentAreaUpdateInput) {
    return this.databaseService.rentArea.update({
      where: { area: name },
      data: updateRentAreaDto,
    });
  }

  remove(name: string) {
    return this.databaseService.rentArea.delete({
      where: { area: name },
    });
  }
}
