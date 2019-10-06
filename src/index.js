import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoList from './models/TodoList'
import App from './App';

let todolist = new TodoList()

ReactDOM.render(<App todolist={todolist} />, document.getElementById('root'));
