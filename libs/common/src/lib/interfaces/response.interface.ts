import { UserResponse } from '@prisma/client';

export interface IUserResponse extends Omit<UserResponse, 'id' | 'createdAt'> {
  id?: number;
  createdAt?: Date;
}
