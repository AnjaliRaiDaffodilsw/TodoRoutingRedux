import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

import './App.css';
import AddTodo from './components/AddTodo';
import EditTodo from './components/EditTodo';
import Navbar from './components/Navbar';
import Todo from './components/Todo';
import {
  deleteTodoList,
  addTodoList,
  editTodoList
} from './redux/actions/todoActions';

const App = () => {
  const todoItems = useSelector((state) => state.todoList.items);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodoList(id));
  }

  const handleSubmit = (value) => {
    dispatch(addTodoList(value));
  }

  const handleEdit = (valueObj) => {
    dispatch(editTodoList(valueObj));
  }

  return (
    <Router>
      <div className="">
        <Navbar />
        <div className="container">
          <div className="py-3 form-container">
            <Switch>
              <Route exact path="/">
                <Todo
                  todoItems={todoItems}
                  deleteHandler={handleDelete}
                />
              </Route>
              <Route exact path="/add" >
                <AddTodo
                  submitHandler={handleSubmit}
                />
              </Route>
              <Route exact path="/edit/:id">
                <EditTodo
                  editHandler={handleEdit}
                  todoItems={todoItems}
                />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App;
