import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import tasks_reducer, { tasks_actions } from './tasks';

const middleware = getDefaultMiddleware({
  immutableCheck: false,
  serializableCheck: false,
  thunk: true,
});

export const store = configureStore({
  reducer: { tasks_reducer },
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
});

export const actions = {
  tasks: tasks_actions
};
