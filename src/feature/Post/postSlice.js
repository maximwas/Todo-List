import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const jsonFetch = createAsyncThunk("json/jsonFetch", async (_, { getState }) => {
  try {
    const { postsSlice } = getState();
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=9&_page=${postsSlice.pagePosts}`);
    const result = await response.json();

    return result;
  } catch (error) {
    throw error;
  }
});

export const getPostById = (id) => (state) => state.postsSlice.posts.find((post) => post.id === Number(id));

export const getPost = (state) => state.postsSlice.posts;

export const getPagePosts = (state) => state.postsSlice.pagePosts;

const reducers = createSlice({
  name: "post",
  initialState: {
    posts: [],
    pagePosts: 1,
  },
  reducers: {
    setPagePosts(state, action) {
      state.pagePosts = action.payload;
    }
  },
  extraReducers: ({ addCase }) => {
    addCase(jsonFetch.fulfilled, (state, action) => {
      state.posts = action.payload;
    });
  },
});

export const { setPagePosts } = reducers.actions; 

export default reducers.reducer;
