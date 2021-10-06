import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import TodoList from './TodoList';
import '../App.css';
import { deleteTodoList } from '../redux/actions/todoActions';

const Todo = () => {
  const todoItems = useSelector((state) => state.todoList.items);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodoList(id));
  }

  return (
    <div className="App">
      <TodoList
        todoItems={todoItems}
        deleteHandler={handleDelete}
      />
    </div>
  )
}

export default Todo;
