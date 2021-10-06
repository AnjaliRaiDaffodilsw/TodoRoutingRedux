import React, { useState, useEffect } from 'react';

import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editTodoList } from '../redux/actions/todoActions';

const EditTodo = () => {
  let { id } = useParams();
  let history = useHistory();
  const todoItems = useSelector((state) => state.todoList.items);
  const [value, setTextValue] = useState("");
  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(editTodoList({
      key: +id,
      text: value
    }))
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
            Add Todo
        </button>
        </form>
      </div>
    </div>
  )
}

export default EditTodo
