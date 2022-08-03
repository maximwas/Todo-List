import { configureStore } from "@reduxjs/toolkit";

import toListSlice from "../feature/toDoList/toListSlice";

export default configureStore({
  reducer: {
    listReducer: toListSlice,
  },
});
