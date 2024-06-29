import React from 'react';
import './Catalogo.css';

const Catalogo = ({ title, items }) => {
  return (
    <div className='catalogo'>
      <h2>{title}</h2>
      <div className='catalogo--listarea'>

        <div className='catalogo--list'>
            {items && items.results && items.results.length > 0 && items.results.map((item, key) => (
                <div key={key} className='catalogo--item'>
                    <img key={key} src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.title || item.name} />
                </div>
            ))}
        </div>
        
      </div>
    </div>
  );
}

export default Catalogo;