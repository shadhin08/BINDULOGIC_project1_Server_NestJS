import {
  Controller,
  Get,
  Post,
  Body,
  // Patch,
  // Param,
  // Delete,
  Req,
  Res,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { Request, Response } from 'express';
import { RentAreaService } from './rent-area.service';

@Controller('rent-area')
export class RentAreaController {
  constructor(private readonly rentAreaService: RentAreaService) {}

  @Post()
  async create(
    @Body() createRentAreaDto: Prisma.RentAreaCreateInput,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    try {
      const result = await this.rentAreaService.create(createRentAreaDto);
      if (result) {
        res.status(200).send(result);
      } else {
        res
          .status(404)
          .send('Area maybe already exist or something is missing...!');
      }
    } catch (error) {
      res.status(400).send('Something went wrong...');
    }
  }

  @Get()
  async findAll(@Req() req: Request, @Res() res: Response) {
    try {
      const result = await this.rentAreaService.findAll();
      if (result) {
        res.status(200).send(result);
      } else {
        res.status(404).send('Area not found...');
      }
    } catch (error) {
      res.status(400).send('Something went wrong...');
    }
  }

  // @Get(':name')
  // findOne(@Param('name') name: string) {
  //   return this.rentAreaService.findOne(name);
  // }

  // @Patch(':name')
  // update(
  //   @Param('name') name: string,
  //   @Body() updateRentAreaDto: Prisma.RentAreaUpdateInput,
  // ) {
  //   return this.rentAreaService.update(name, updateRentAreaDto);
  // }

  // @Delete(':name')
  // remove(@Param('name') name: string) {
  //   return this.rentAreaService.remove(name);
  // }
}
