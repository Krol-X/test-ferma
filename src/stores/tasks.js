import { createReducer, createAsyncThunk } from '@reduxjs/toolkit';
import api from '@/api';
import { FilterEnum } from '@/stores/filter'
import { findIndexById, StringEnum } from "@/utils";

const actions = {
  fetch: createAsyncThunk('tasks/fetch', async (filter = null) => {
    if (filter === FilterEnum.filter_done) {
      filter = true
    } else if (filter === FilterEnum.filter_undone) {
      filter = false
    } else {
      filter = null
    }
    const { items, error } = await api.tasks.fetch(filter);
    if (error) throw new Error(error);
    return items;
  }),
  create: createAsyncThunk('tasks/create', async (title) => {
    const { item, error } = await api.tasks.create(title);
    if (error) throw new Error(error);
    return item;
  }),
  update: createAsyncThunk('tasks/update', async (task) => {
    const { item, error } = await api.tasks.update(task);
    if (error) throw new Error(error);
    return item;
  }),
  remove: createAsyncThunk('tasks/delete', async (id) => {
    const { id: removedId, error } = await api.tasks.remove(id);
    if (error) throw new Error(error);
    return removedId;
  })
}

export const LoadingState = new StringEnum('none', 'loading', 'succeeded', 'failed')

const initalState = {
  items: [],
  loadingState: LoadingState.none,
  error: null
}

const reducer = createReducer(initalState, (builder) => {
  builder
    .addCase(actions.fetch.pending, (state) => {
      state.loadingState = LoadingState.loading;
    })
    .addCase(actions.fetch.fulfilled, (state, action) => {
      state.loadingState = LoadingState.succeeded;
      state.error = null;
      state.items = action.payload;
    })
    .addCase(actions.fetch.rejected, (state, action) => {
      state.loadingState = LoadingState.failed;
      state.error = action.error.message;
    })
    .addCase(actions.create.fulfilled, (state, action) => {
      state.items.push(action.payload);
    })
    .addCase(actions.update.fulfilled, (state, action) => {
      const id = findIndexById(state.items, action.payload.id);
      if (id !== -1) {
        state.items[id] = action.payload;
      }
    })
    .addCase(actions.remove.fulfilled, (state, action) => {
      const id = findIndexById(state.items, action.payload);
      if (id !== -1) {
        state.items.splice(id, 1);
      }
    });
})

export default {
  actions,
  reducer
}
