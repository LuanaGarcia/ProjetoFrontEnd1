import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.render(
  React.createElement(BrowserRouter, null, React.createElement(App)),
  document.getElementById('root')
);
