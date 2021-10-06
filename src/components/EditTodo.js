import React, { useState } from 'react';
import { useHistory, useParams } from "react-router-dom";

const EditTodo = (props) => {
  const { editHandler } = props;
  let { id } = useParams();
  let history = useHistory();
  const [value, setTextValue] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    editHandler({ key: +id, text: value })
    history.push("/");
  }

  return (
    <div className="card border-0 shadow">
      <div className="card-header">Add a Todo</div>
      <div className="card-body">
        <form onSubmit={(event) => onSubmit(event)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Todo"
              value={value}
              onChange={(event) => setTextValue(event.target.value)}
            />
          </div>
          <button className="btn btn-primary" type="submit">
            Edit Todo
        </button>
        </form>
      </div>
    </div>
  )
}

export default EditTodo
