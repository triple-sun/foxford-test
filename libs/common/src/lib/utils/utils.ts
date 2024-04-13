import { Answer } from '@prisma/client';
import { UsersListResponse } from '@slack/web-api';
import { DocumentBuilder } from '@nestjs/swagger';
import { ClassConstructor, plainToInstance } from 'class-transformer';
import { ValidationArguments } from 'class-validator';

import { emailRegExp } from '../consts/const';

export const logAnswer = (
  name: string,
  email: string,
  answer: Answer,
  date: Date
) =>
  console.log(
    `Записан ответ ${
      answer === Answer.YES ? 'Да' : 'Нет'
    } от ${name} (${email}) в ${date}`
  );

export const getUserIds = (userList: UsersListResponse): string[] => {
  const ids: string[] = [];

  if (!userList.members) {
    throw new Error('Ошибка загрузки пользователей');
  }

  userList.members
    .filter((m) => emailRegExp.test(m.profile?.email ?? ''))
    .forEach((m) => {
      if (m.id) {
        ids.push(m.id);
      }
    });

  return ids;
};

export const fillObject = <T, V>(dto: ClassConstructor<T>, obj: V) =>
  plainToInstance(dto, obj, { excludeExtraneousValues: true });

export const getENVErrorMessage = ({
  value,
  targetName,
  property,
}: ValidationArguments) =>
  `${targetName} ${property
    .toLowerCase()
    .replace(/_/g, ' ')} is required. Current value: ${value}`;

export const getSwaggerConfig = (
  title: string,
  desc: string,
  version: string
) =>
  new DocumentBuilder()
    .setTitle(title)
    .setDescription(desc)
    .setVersion(version)
    .addBearerAuth()
    .build();