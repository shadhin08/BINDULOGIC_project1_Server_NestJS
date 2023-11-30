import {
  Controller,
  Get,
  Post,
  Body,
  // Patch,
  Param,
  Req,
  Res,
  // Delete,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { Request, Response } from 'express';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(
    @Body() createUserDto: Prisma.UserCreateInput,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    try {
      const result = await this.userService.create(createUserDto);
      if (result) {
        res.cookie('username', result.username);
        res.status(200).send(result);
      } else {
        res
          .status(409)
          .send(
            'Username or email maybe already exist or something is missing...!',
          );
      }
    } catch (error) {
      res.status(400).send('Something went wrong...');
    }
  }

  @Get()
  async findAll(@Req() req: Request, @Res() res: Response) {
    try {
      const result = await this.userService.findAll();
      if (result) {
        res.status(200).send(result);
      } else {
        res.status(404).send('Users not found...');
      }
    } catch (error) {}
  }

  @Get(':username')
  async findUserByUsername(
    @Param('username') username: string,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    try {
      const result = await this.userService.findOne(username);
      if (result) {
        res.status(200).send(result);
      } else {
        res.status(404).send('User not found...');
      }
    } catch (error) {
      res.status(400).send('Something went wrong...');
    }
  }

  // @Patch(':username')
  // update(
  //   @Param('username') username: string,
  //   @Body() updateUserDto: Prisma.UserUpdateInput,
  // ) {
  //   return this.userService.update(username, updateUserDto);
  // }

  // @Delete(':username')
  // remove(@Param('username') username: string) {
  //   return this.userService.remove(username);
  // }
}
