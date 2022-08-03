import { SET_NEW_TASK, SET_LIST_STORE, EDIT_TASK, REMOVE_TASK, SEARCH_LIST, JSON_FETCH } from "../types";

export const setNewTask = (payload) => {
  return {
    type: SET_NEW_TASK,
    payload,
  };
};

export const setListStore = (payload) => {
  return {
    type: SET_LIST_STORE,
    payload,
  };
};

export const removeTask = (id) => {
  return {
    type: REMOVE_TASK,
    id,
  };
};

export const editTask = (payload) => {
  return {
    type: EDIT_TASK,
    payload,
  };
};

export const setSearchList = (payload) => {
  return {
    type: SEARCH_LIST,
    payload,
  };
};

export const jsonFetch = () => {
  return async (dispatch) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const result = await response.json();
    const action = {
      type: JSON_FETCH,
      payload: result, 
    }

    dispatch(action)
  }
};