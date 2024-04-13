import { IEntity, IUserResponse } from '@foxford-test/common';
import { Answer } from '@prisma/client';

export class ResponseEntity implements IEntity<IUserResponse> {
  public name: string;
  public email: string;
  public answer: Answer;
  public createdAt: Date;
  public id: number;

  constructor(response: IUserResponse) {
    this.fillEntity(response);
  }

  public toObject() {
    return { ...this };
  }

  public fillEntity(response: IUserResponse) {
    this.name = response.name;
    this.email = response.email;
    this.answer = response.answer;
    this.createdAt = response.createdAt
    this.id = response.id
  }
}
