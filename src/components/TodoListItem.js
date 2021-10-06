import React from 'react'

import '../assets/styles/TodoListItem.css';

const TodoListItem = (props) => {
  const { textValue, deleteHandler, id } = props;
  return (
    <div className="list">
      <p>
        {textValue}
        <span
          className="material-icons  text-danger"
          onClick={() => deleteHandler(id)}
        >
          X
        </span>
      </p>
    </div>
  )
}

export default TodoListItem;
