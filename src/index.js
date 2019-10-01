import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import appState from './appState'
import App from './App';

ReactDOM.render(<App appState={appState} />, document.getElementById('root'));
