import React from 'react';
import './Header.css';

const Header = ({ black }) => {
  return (
    <header className={black ? 'black' : ''}>
      <div className='header--logo'>
        <a className='header--home' href='/Home'>
          <h1>GARCIAFLIX</h1>
        </a>
      </div>
      <div className='header--user'>
        <a href='/Home'>
          <img src='https://i.pinimg.com/564x/5b/50/e7/5b50e75d07c726d36f397f6359098f58.jpg' alt='Usuário' />
        </a>
      </div>
    </header>
  );
};

export default Header;
