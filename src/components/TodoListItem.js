import React from 'react'
import { Link } from "react-router-dom";

import '../assets/styles/TodoListItem.css';

const TodoListItem = (props) => {
  const { textValue, deleteHandler, id } = props;
  return (
    <div className="list">
      <p>
        {textValue}
        <Link to={`/edit/${id}`}>
          <span className="material-icons mr-2">edit</span>
        </Link>
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
