import { UserResponse } from '@prisma/client';
import { store } from '../store/store';

export type State = ReturnType<typeof store.getState>;

export type TMainPageState = {
  responses: UserResponse[] | [];
  isLoaded: boolean;
}
