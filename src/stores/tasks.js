import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from '../api';
import { findIndexById } from "../utils/stores";

const initialState = {
  items: [],
  loadingState: 'none', // 'none', 'loading', 'succeeded', 'failed'
  error: null,
};

const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
  const { items, error } = await api.tasks.fetch();
  if (error) throw new Error(error);
  return items;
});

const createTask = createAsyncThunk('tasks/create', async (title) => {
  const { item, error } = await api.tasks.create(title);
  if (error) throw new Error(error);
  return item;
});

const updateTask = createAsyncThunk('tasks/update', async (task) => {
  const { item, error } = await api.tasks.update(task);
  if (error) throw new Error(error);
  return item;
});

const deleteTask = createAsyncThunk('tasks/delete', async (id) => {
  const { error } = await api.tasks.delete(id);
  if (error) throw new Error(error);
  return id;
});

const taskListSlice = createSlice({
  name: 'TaskList',
  initialState,
  reducers: {
    editTask: (state, action) => {
      const id = findIndexById(state.items, action.payload.id);
      if (id !== -1) {
        state.items[id]._edited = action.payload.value;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.loadingState = 'loading';
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.loadingState = 'succeeded';
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.loadingState = 'failed';
        state.error = action.error.message;
      })
      .addCase(createTask.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(updateTask.fulfilled, (state, action) => {
        const id = findIndexById(state.items, action.payload.id);
        if (id !== -1) {
          state.items[id] = action.payload;
        }
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        const id = findIndexById(state.items, action.payload);
        if (id !== -1) {
          state.items.splice(id, 1);
        }
      });
  },
});

export const tasks_actions = {
  ...taskListSlice.actions,
  fetchTasks,
  createTask,
  updateTask,
  deleteTask,
};

export default taskListSlice.reducer;
