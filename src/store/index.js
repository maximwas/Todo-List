import { configureStore } from "@reduxjs/toolkit";

import postReducer from "../feature/Post/postSlice";
import toListReducer from "../feature/toDoList/toListSlice";

export default configureStore({
  reducer: {
    listReducer: toListReducer,
    postsSlice: postReducer
  },
});
