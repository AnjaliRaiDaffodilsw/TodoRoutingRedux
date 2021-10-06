import React from 'react'
import TodoListItem from './TodoListItem';

const TodoList = (props) => {
  const { todoItems, deleteHandler, updateHandler } = props;
  return (
    <div>
      {todoItems.map((value) => {
        return (
          <TodoListItem
            key={value.key}
            textValue={value.text}
            id={value.key}
            deleteHandler={deleteHandler}
            updateHandler={updateHandler}
          />
        )
      })}
    </div>
  )
}

export default TodoList
