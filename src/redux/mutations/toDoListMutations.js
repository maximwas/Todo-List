export const setNewTask = (state, payload) => {
  return {
    ...state,
    list: [...state.list, payload],
  };
};

export const setListStore = (state, payload) => {
  return {
    ...state,
    list: payload,
  };
};

export const removeTask = (state, id) => {
  return {
    ...state,
    list: state.list.filter((item) => item.id !== id),
  };
};

export const editTask = (state, payload) => {
  return {
    ...state,
    edit: payload,
  };
};

export const setSearchList = (state, payload) => {
  return {
    ...state,
    searchList: payload,
  };
};