import {
  TODO_LIST,
  ADD_TODO_LIST,
  DELETE_TODO_LIST,
  EDIT_TODO_LIST,
} from '../actionTypes/todoActionTypes';

export const todoList = () => {
  return {
    type: TODO_LIST,
  }
}

export const addTodoList = (item) => {
  return {
    type: ADD_TODO_LIST,
    item,
    key: Math.random(),
  }
}

export const deleteTodoList = (key) => {
  return {
    type: DELETE_TODO_LIST,
    key,
  }
}
export const editTodoList = (obj) => {
  return {
    type: EDIT_TODO_LIST,
    payload: obj
  }
}
