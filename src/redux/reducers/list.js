import { SET_NEW_TASK, SET_LIST_STORE, REMOVE_TASK, EDIT_TASK, SEARCH_LIST, JSON_FETCH } from "../types";
import { setNewTask, setListStore, removeTask, editTask, setSearchList } from "../mutations/toDoListMutations";

const initialState = {
  list: [],
  edit: {},
  searchList: [],
  json: [],
};

export const toDoListReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NEW_TASK:
      return setNewTask(state, action.payload);
    case SET_LIST_STORE:
      return setListStore(state, action.payload);
    case REMOVE_TASK:
      return removeTask(state, action.id);
    case EDIT_TASK:
      return editTask(state, action.payload);
    case SEARCH_LIST:
      return setSearchList(state, action.payload);
    case JSON_FETCH:
      return {
        ...state,
        json: action.payload,
      };
    default:
      return state;
  }
};
