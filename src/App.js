import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';
import AddTodo from './components/AddTodo';
import Navbar from './components/Navbar';
import Todo from './components/Todo';

const App = () => {
  return (
    <Router>
      <div className="">
        <Navbar />
        <div className="container">
          <div className="py-3">
            <Switch>
              <Route exact path="/" component={Todo} />
              <Route exact path="/add" component={AddTodo} />
              <Route
                exact
                path="/edit/:id"
                component={""}
              />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App;
