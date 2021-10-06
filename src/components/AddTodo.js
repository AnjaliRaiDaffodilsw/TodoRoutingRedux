import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const AddTodo = (props) => {
  const { submitHandler } = props;
  let history = useHistory();
  const [value, setTextValue] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    submitHandler(value);
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
              onChange={(e) => setTextValue(e.target.value)}
            />
          </div>
          <button className="btn btn-primary" type="submit">
            Add Todo
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddTodo;
