import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const goToDetails = () => {
    navigate('/details');
  };

  return React.createElement(
    'div',
    null,
    React.createElement('h1', null, 'Home Page'),
    React.createElement('button', { onClick: goToDetails }, 'Go to Details')
  );
};

export default Home;
