import React from 'react';
import './Catalogo.css';
import { Link } from 'react-router-dom';

const Catalogo = ({ title, items }) => {
  return (
    <div className='catalogo'>
      <h2>{title}</h2>
      <div className='catalogo--listarea'>
        <div className='catalogo--list'>
          {items && items.results && items.results.length > 0 && items.results.map((item, key) => (
            <div key={key} className='catalogo--item'>
              <Link to={`/details/${item.id}?type=${title === 'Originais GarciaFlix' ? 'tv' : 'movie'}`}>
                <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.title || item.name} />
                <div className="details-text">Detalhes</div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Catalogo;

