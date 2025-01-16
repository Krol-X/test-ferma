import { combineReducers, configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger'

import Tasks from './tasks';

export const actions = {
  tasks: Tasks.actions
};

const rootReducer = combineReducers({
  tasks: Tasks.reducer
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
});
