import { ApiPropertyOptional } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class ResponsesQueryDto {
  @Expose()
  @ApiPropertyOptional({
    description: 'Страница списка ответов',
    example: 1,
    default: 1,
    type: Number,
  })
  public page?: number = 1;
}
