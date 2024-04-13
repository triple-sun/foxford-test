import { Controller, Get, Query } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { ResponsesQueryDto, ResponseRdo } from '@foxford-test/common';
import { ResponseService } from './response.service';

@Controller('responses')
export class ResponseController {
  constructor(private readonly responseService: ResponseService) {}

  @Get()
   @ApiOkResponse({ type: [ResponseRdo], description: 'Обьект списка ответов' })
  getResponses() {
    return this.responseService.getResponses();
  }
}
