import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createAPI } from '../services/api/api';
import { responses } from './responses/responses';
import { redirect } from './middlewares/redirect.middleware';
import { NameSpace } from './namespace.enum';

export const rootReducer = combineReducers({
  [NameSpace.Responses]: responses.reducer,
});

export const api = createAPI();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect),
});
