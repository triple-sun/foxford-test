import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import AppDispatch from '../../types/app-dispatch.type';
import { State } from '../../types/state.type';
import { ResponsesQueryDto } from '@foxford-test/common';
import { UserResponse } from '@prisma/client';

export enum Action {
  FetchResponses = 'data/fetchResponses',
  RedirectToRoute = 'app/redirectToRoute',
}

export enum APIRoute {
  responses = 'api/responses',
}

export type TMainPageData = {
  responses: UserResponse[];
};

export const fetchResponsesAction = createAsyncThunk<
  UserResponse[],
  ResponsesQueryDto,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(Action.FetchResponses, async ({ page = 1 }, { dispatch, extra: api }) => {
  const {data} = await api.get<UserResponse[]>(`${APIRoute.responses}?page=${page}`);
  return data;
});