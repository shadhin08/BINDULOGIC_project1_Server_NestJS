import { Controller, Post, Body, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { AuthService } from './auth.service';
import { LogInDto } from './dto/create-auth.dto';

@Controller('auth/login')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  async create(
    @Body() loginDto: LogInDto,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    console.log('hit');
    try {
      const username: string = loginDto.username;
      const user = await this.authService.findIUserByUsername(username);
      if (user) {
        const password: string = loginDto.password;
        const isPasswordCorrect: boolean =
          await this.authService.comparePassword(user.password, password);
        if (isPasswordCorrect) {
          res.cookie('username', username);
          res.status(200).send(user);
        } else {
          res.clearCookie('username');
          res.status(404).send('User not found');
        }
      } else {
        res.clearCookie('username');
        res.status(404).send('User not found');
      }
    } catch (error) {
      res.clearCookie('username');
      res.status(400).send('Something went wrong...');
    }
  }
}
