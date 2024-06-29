import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NotAvailable.css';

const NotAvailable = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/home');
  };

  return (
    <div className="not-available-page">
      <h1>Página não disponível</h1>
      <button onClick={handleBack}>Voltar</button>
    </div>
  );
};

export default NotAvailable;
