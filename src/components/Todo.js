import React from 'react';

import TodoList from './TodoList';
import '../App.css';

const Todo = (props) => {
  const { todoItems, deleteHandler } = props;
  return (
    <div className="App">
      <TodoList
        todoItems={todoItems}
        deleteHandler={deleteHandler}
      />
    </div>
  )
}

export default Todo;
