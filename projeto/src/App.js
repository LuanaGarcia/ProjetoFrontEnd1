import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Details from './components/Details/Details';
import NotAvailable from './components/NotAvailable/NotAvailable';
import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/not-available" element={<NotAvailable />} />
    </Routes>
  );
};

export default App;
