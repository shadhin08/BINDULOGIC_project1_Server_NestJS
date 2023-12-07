import { NestFactory } from '@nestjs/core';
import * as cookieParser from 'cookie-parser';
import { AppModule } from './app.module';

const corsOptions = {
  origin: true, //included origin as true
  credentials: true, //included credentials as true
};

async function main() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser());
  app.enableCors(corsOptions);
  await app.listen(3030);
}
main();
