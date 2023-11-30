import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
import { CreateRentPostDto } from './dto/create-rent-post.dto';

@Injectable()
export class RentPostService {
  constructor(private readonly databaseService: DatabaseService) {}
  async create(createRentPostDto: CreateRentPostDto, logedInUser: string) {
    const { heading, description, rent, bed, bath, size, rentAreaName, image } =
      createRentPostDto;
    return this.databaseService.rentPost.create({
      data: {
        heading,
        description,
        rent,
        bed,
        bath,
        size,
        rentAreaName,
        image,
        userUsername: logedInUser,
      },
    });
  }

  async findAll() {
    return this.databaseService.rentPost.findMany({});
  }

  async findOne(id: string) {
    return this.databaseService.rentPost.findUnique({ where: { id } });
  }

  async findByUsername(username: string) {
    return this.databaseService.rentPost.findMany({
      where: { userUsername: username },
    });
  }

  async update(id: string, updateRentPostDto: Prisma.RentPostUpdateInput) {
    return this.databaseService.rentPost.update({
      where: { id },
      data: updateRentPostDto,
    });
  }

  async remove(id: string) {
    return this.databaseService.rentPost.delete({ where: { id } });
  }
}
