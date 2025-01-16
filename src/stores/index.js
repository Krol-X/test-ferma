import { combineReducers, configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger'

import Tasks from './tasks';
import Filter from './filter';

export const actions = {
  tasks: Tasks.actions,
  filter: Filter.actions
};

const rootReducer = combineReducers({
  tasks: Tasks.reducer,
  filter: Filter.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
});
