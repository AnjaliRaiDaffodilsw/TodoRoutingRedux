import { combineReducers } from 'redux';

import {todoList} from './todoReducers';

const rootReducers = combineReducers({
  todoList,
});

export default rootReducers;