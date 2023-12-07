import {
  Controller,
  Get,
  Post,
  Body,
  // Patch,
  Param,
  // Delete,
  Req,
  Res,
} from '@nestjs/common';
// import { Prisma } from '@prisma/client';
import { Request, Response } from 'express';
import { CreateRentPostDto } from './dto/create-rent-post.dto';
import { RentPostService } from './rent-post.service';

@Controller('rent-post')
export class RentPostController {
  constructor(private readonly rentPostService: RentPostService) {}

  @Post()
  async create(
    @Body() createRentPostDto: CreateRentPostDto,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    try {
      const logedInUser = req.cookies ? req.cookies?.username : null;
      if (logedInUser) {
        const post = await this.rentPostService.create(
          createRentPostDto,
          logedInUser,
        );
        res.status(200).send(post);
      } else {
        res.status(400).send('Log in first...');
      }
    } catch (error) {
      res.status(400).send('Something went wrong...');
    }
  }

  @Get()
  async findAll(@Req() req: Request, @Res() res: Response) {
    try {
      const result = await this.rentPostService.findAll();
      if (result) {
        result.reverse();
        res.status(200).send(result);
      } else {
        res.status(404).send('Rent post not found');
      }
    } catch (error) {
      res.status(400).send('Something went wrong...');
    }
  }

  @Get('id/:id')
  async findOneById(
    @Param('id') id: string,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    try {
      const result = await this.rentPostService.findOne(id);
      if (result) {
        res.status(200).send(result);
      } else {
        res.status(404).send('Rent post not found');
      }
    } catch (error) {
      res.status(400).send('Something went wrong...');
    }
  }

  @Get('user/:username')
  async findByUsername(
    @Param('username') username: string,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    try {
      const result = await this.rentPostService.findByUsername(username);
      if (result) {
        result.reverse();
        res.status(200).send(result);
      } else {
        res.status(404).send('User not found');
      }
    } catch (error) {
      res.status(400).send('Something went wrong...');
    }
  }
  @Get('area/:area')
  async findRentPostByArea(
    @Param('area') area: string,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    try {
      const result = await this.rentPostService.findRentPostByArea(area);
      if (result) {
        result.reverse();
        res.status(200).send(result);
      } else {
        res.status(404).send('Rent post not found');
      }
    } catch (error) {
      res.status(400).send('Something went wrong...');
    }
  }

  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updateRentPostDto: Prisma.RentPostUpdateInput,
  // ) {
  //   return this.rentPostService.update(id, updateRentPostDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.rentPostService.remove(id);
  // }
}
