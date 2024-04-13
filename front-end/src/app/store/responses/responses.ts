import { createSlice } from '@reduxjs/toolkit';
import {fetchResponsesAction } from './responses.api.actions';
import { TMainPageState } from '../../types/state.type';
import { NameSpace } from '../namespace.enum';

const mainPageInitialState: TMainPageState = {
  responses: [],
  isLoaded: false
};

export const responses = createSlice({
  name: NameSpace.Responses,
  initialState: mainPageInitialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchResponsesAction.pending, (state) => {
        state.isLoaded = false;
      })
      .addCase(fetchResponsesAction.fulfilled, (state, action) => {
        state.responses = action.payload;
        state.isLoaded = true;
      })
  },
});
