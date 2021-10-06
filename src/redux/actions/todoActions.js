import {
  TODO_LIST,
  ADD_TODO_LIST,
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