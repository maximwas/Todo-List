import { combineReducers } from "redux";
import { toDoListReducer } from "./reducers/list";

export const reducers = combineReducers({
  listReducer: toDoListReducer,
});
