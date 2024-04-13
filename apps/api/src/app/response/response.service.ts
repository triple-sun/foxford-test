import { Injectable } from '@nestjs/common';
import { ResponseRepository } from './response.repository';
import { fillObject, ResponsesQueryDto, ResponseRdo } from '@foxford-test/common';

@Injectable()
export class ResponseService {
  constructor(private readonly responseRepository: ResponseRepository) {}

  async getResponses() {
    const responses = await this.responseRepository.findMany()

    return responses.map((response) => fillObject(ResponseRdo, response));
  }
}
