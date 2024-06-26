import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Details from './components/Details';
import "./App.css";

const App = () => {
  return React.createElement(
    Routes,
    null,
    //Rotas para paginas
    React.createElement(Route, { path: '/', element: React.createElement(Login) }),
    React.createElement(Route, { path: '/home', element: React.createElement(Home) }),
    React.createElement(Route, { path: '/details', element: React.createElement(Details) })
  );
};

export default App;
