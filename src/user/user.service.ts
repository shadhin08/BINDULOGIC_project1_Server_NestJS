import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class UserService {
  constructor(private readonly databaseService: DatabaseService) {}
  async create(createUserDto: Prisma.UserCreateInput) {
    return this.databaseService.user.create({
      data: createUserDto,
      select: {
        firstName: true,
        lastName: true,
        username: true,
        email: true,
        image: true,
      },
    });
  }

  async findAll() {
    return this.databaseService.user.findMany({
      select: {
        firstName: true,
        lastName: true,
        username: true,
        email: true,
        image: true,
      },
    });
  }

  async findOne(username: string) {
    return this.databaseService.user.findUnique({
      where: {
        username: username,
      },
      select: {
        firstName: true,
        lastName: true,
        username: true,
        email: true,
        image: true,
      },
    });
  }

  async update(username: string, updateUserDto: Prisma.UserUpdateInput) {
    return this.databaseService.user.update({
      where: { username: username },
      data: updateUserDto,
      select: {
        firstName: true,
        lastName: true,
        username: true,
        email: true,
        image: true,
      },
    });
  }

  remove(username: string) {
    return this.databaseService.user.delete({
      where: {
        username: username,
      },
    });
  }
}
