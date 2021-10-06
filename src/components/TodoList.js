import React from 'react'
import TodoListItem from './TodoListItem';

const TodoList = (props) => {
  const { todoItems } = props;
  return (
    <div>
      {todoItems.map((value) => {
        return (
          <TodoListItem
            key={value.key}
            textValue={value.text}
            id={value.key}
          />
        )
      })}
    </div>
  )
}

export default TodoList
