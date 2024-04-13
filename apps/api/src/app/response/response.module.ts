import { Module } from '@nestjs/common';

import { ResponseController } from './response.controller';
import { ResponseService } from './response.service';
import { ResponseRepository } from './response.repository';
import { PrismaModule } from '@foxford-test/prisma';

@Module({
  imports: [PrismaModule],
  controllers: [ResponseController],
  providers: [ResponseService, ResponseRepository],
})
export class ResponseModule {}
