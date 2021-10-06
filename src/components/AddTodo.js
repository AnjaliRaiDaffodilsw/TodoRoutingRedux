import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { addTodoList } from '../redux/actions/todoActions';

const AddTodo = (props) => {
  let history = useHistory();
  const dispatch = useDispatch();
  const [value, setTextValue] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(addTodoList(value))
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
