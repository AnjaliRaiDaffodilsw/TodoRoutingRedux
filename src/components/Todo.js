import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TodoList from './TodoList';
import '../App.css';

const Todo = () => {
  const dispatch = useDispatch();
  const todoItems = useSelector((state) => state.todoList.items);

  return (
    <div className="App">
      <TodoList
        todoItems={todoItems}
      />
    </div>
  )
}

export default Todo;
