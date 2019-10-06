import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './models/Home'
import App from './App';

let home = new Home()

ReactDOM.render(<App home={home} />, document.getElementById('root'));
