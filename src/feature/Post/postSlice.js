import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const jsonFetch = createAsyncThunk("json/jsonFetch", async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const result = await response.json();

    return result;
  } catch (error) {
    throw error;
  }
});

export const getPostById = (id) => (state) => state.postsSlice.posts.find((post) => post.id === Number(id));

export const getPost = (state) => state.postsSlice.posts;

const reducers = createSlice({
  name: "post",
  initialState: {
    posts: [],
  },
  reducers: {},
  extraReducers: ({ addCase }) => {
    addCase(jsonFetch.fulfilled, (state, action) => {
      state.posts = action.payload;
    });
  },
});

export default reducers.reducer;
