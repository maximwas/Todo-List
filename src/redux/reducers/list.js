import { SET_NEW_TASK, SET_LIST_STORE, REMOVE_TASK, EDIT_TASK, SEARCH_LIST } from "../types";

const initialState = {
  list: [],
  edit: {},
  searchList: [],
};

export const toDoListReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NEW_TASK:
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    case SET_LIST_STORE:
      return {
        ...state,
        list: action.payload,
      };
    case REMOVE_TASK:
      return {
        ...state,
        list: state.list.filter((item) => item.id !== action.id),
      };
    case EDIT_TASK:
      return {
        ...state,
        edit: action.payload,
      };
    case SEARCH_LIST:
      return {
        ...state,
        searchList: action.payload,
      };
    default:
      return state;
  }
};
