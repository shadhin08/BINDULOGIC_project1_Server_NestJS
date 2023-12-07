import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class AuthService {
  constructor(private readonly databaseServices: DatabaseService) {}

  async findIUserByUsername(username: string) {
    return this.databaseServices.user.findUnique({
      where: { username: username },
    });
  }

  async comparePassword(userPassword: string, password: string) {
    if (userPassword === password) {
      return true;
    } else {
      return false;
    }
  }
}
