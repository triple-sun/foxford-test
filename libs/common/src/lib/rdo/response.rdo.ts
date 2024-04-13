import { ApiProperty } from '@nestjs/swagger';
import { Answer, UserResponse } from '@prisma/client';
import { Expose } from 'class-transformer';
import { IsDate, IsEmail, IsEnum, IsInt, IsString } from 'class-validator';

export class ResponseRdo implements UserResponse {
  @Expose()
  @IsInt()
  @ApiProperty({
    description: 'Id ответа',
    example: 1,
    required: true,
    type: Number,
  })
  public id!: number;

  @Expose()
  @IsString()
  @ApiProperty({
    description: 'Имя и Фамилия пользователя',
    example: 'Анна Петрова',
    required: true,
    type: String,
  })
  public name!: string;

  @Expose()
  @IsEmail()
  @ApiProperty({
    description: 'E-mail пользователя',
    example: 'example@email.com',
    required: true,
    type: String,
  })
  public email!: string;

  @Expose()
  @IsDate()
  @ApiProperty({
    description: 'Дата ответа',
    example: new Date(),
    required: true,
    type: Date,
  })
  public createdAt!: Date;

  @Expose()
  @IsEnum(Answer)
  @ApiProperty({
    description: 'Ответ',
    example: Answer.YES,
    required: true,
    nullable: false,
    type: Answer,
    enum: Answer,
  })
  public answer!: Answer;
}
