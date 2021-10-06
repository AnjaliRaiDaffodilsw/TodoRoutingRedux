import {
  TODO_LIST,
  ADD_TODO_LIST,
  DELETE_TODO_LIST,
} from '../actionTypes/todoActionTypes';


export const initialState = {
  items: [
    { text: 'Learn JavaScript', key: 1 },
    { text: 'Learn React', key: 2 },
    { text: 'Play around in JS', key: 3 },
    { text: 'Build something Great', key: 4 }
  ],
}

export const todoList = (state = initialState, action) => {
  switch (action.type) {
    case TODO_LIST:
      return {
        ...state,
      }
    case ADD_TODO_LIST:
      return {
        ...state,
        items: [...state.items, { text: action.item, key: action.key }],
      };
    case DELETE_TODO_LIST:
      const filteredItem = state.items.filter((item) => item.key !== action.key)
      return {
        ...state,
        items: filteredItem
      }
    default:
      return state;
  }
}