import { IUserResponse, ResponsesQueryDto, RESPONSES_PER_PAGE } from '@foxford-test/common';
import { PrismaService } from '@foxford-test/prisma';
import { Inject } from '@nestjs/common';

export class ResponseRepository {
  constructor(
    @Inject(PrismaService)
    private readonly prismaService: PrismaService
  ) {}

  public async findMany(): Promise<IUserResponse[]> {
    return this.prismaService.userResponse.findMany();
  }
}
