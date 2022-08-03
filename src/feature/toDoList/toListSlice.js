import { createSlice, createAsyncThunk, createSelector } from "@reduxjs/toolkit";

export const jsonFetch = createAsyncThunk("json/jsonFetch", async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const result = await response.json();

    return result;
  } catch (error) {
    throw error;
  }
});

const reducers = createSlice({
  name: "toDoList",
  initialState: {
    list: [],
    edit: {},
    searchList: [],
    json: [],
  },
  reducers: {
    setNewTask: (state, action) => {
      state.list.push(action.payload);
    },
    setListStore: (state, action) => {
      state.list = action.payload;
    },
    removeTask: (state, action) => {
      state.list = state.list.filter((item) => item.id !== action.payload);
    },
    editTask: (state, action) => {
      state.edit = action.payload;
    },
    setSearchList: (state, action) => {
      state.searchList = action.payload;
    },
  },
  extraReducers: ({ addCase }) => {
    addCase(jsonFetch.fulfilled, (state, action) => {
      state.json = action.payload;
    });
  },
});

export const { setNewTask, setListStore, removeTask, editTask, setSearchList } = reducers.actions;
export const getSliceToDoListState = (state) => state.listReducer;

export default reducers.reducer;
