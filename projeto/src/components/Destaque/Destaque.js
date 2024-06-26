import React from "react";
import { useNavigate } from 'react-router-dom';
import './Destaque.css';

export default ({ item }) => {
  const navigate = useNavigate();

  const handleNotAvailable = () => {
    navigate('/not-available');
  };

  let firstDate = new Date(item.first_air_date);
  let genres = [];
  for (let i in item.genres) {
    genres.push(item.genres[i].name);
  }

  return (
    <section className="destaque" style={{
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
    }}>
      <div className="destaque--vertical">
        <div className="destaque--horizontal">
          <div className="destaque--name">{item.original_name}</div>
          <div className="destaque--info">
            <div className="destaque--points">{item.vote_average} pontos</div>
            <div className="destaque--year">{firstDate.getFullYear()}</div>
            <div className="destaque--seasons">{item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : ''}</div>
          </div>
          <div className="destaque--description">{item.overview}</div>
          <div className="destaque--buttons">
            <button onClick={handleNotAvailable} className="destaque--assistir">⊵ Assistir</button>
            <button onClick={handleNotAvailable} className="destaque--addlista">+ Minha Lista</button>
          </div>
          <div className="destaque--genres"><strong>Gêneros:</strong> {genres.join(', ')}</div>
        </div>
      </div>
    </section>
  );
}
