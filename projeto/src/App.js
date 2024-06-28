import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Details from './components/Details';
import "./App.css";
<<<<<<< HEAD:projetol/src/App.js
=======
import { getWeather } from './weather';

getWeather(10,10,Intl.DateTimeFormat().resolvedOptions().timeZone).then(
  res => {
    console.log(res.data)
  }
)
>>>>>>> 24a28e3b891fa4d82bb3977fcb575a801fc3cdf1:projeto/src/App.js

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
