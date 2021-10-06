import React from 'react'
import { Link } from "react-router-dom";

import '../assets/styles/TodoListItem.css';

const TodoListItem = (props) => {
  const { textValue, deleteHandler, id } = props;
  return (
    <div className="list">
      <p>
        {textValue}
      </p>
      <div className="buttons-container">
        <Link to={`/edit/${id}`}>
          <span className="material-icons mr-2">
            <button className="btn bg-warning ml-auto edit-button">edit</button>
          </span>
        </Link>
        <span
          className="material-icons  text-danger delete-button"
          onClick={() => deleteHandler(id)}
        >
          X
        </span>
      </div>
    </div>
  )
}

export default TodoListItem;
