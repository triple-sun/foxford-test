import browserHistory from '../../browser-history';
import { isAction, Middleware } from '@reduxjs/toolkit';
import { rootReducer } from '../store';
import { Action } from '../responses/responses.api.actions';

type Reducer = ReturnType<typeof rootReducer>;

export const redirect: Middleware<unknown, Reducer> =
  (_store) => (next) => (action) => {
    if (isAction(action) && action.type === Action.RedirectToRoute) {
      browserHistory.push(action.type);
    }

    return next(action);
  };
