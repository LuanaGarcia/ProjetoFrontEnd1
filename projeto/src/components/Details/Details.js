import React, { useEffect, useState } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import API from '../../Api.js';
import './Details.css';

const Details = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      if (!id) {
        console.error("No movie ID provided.");
        return;
      }

      const urlParams = new URLSearchParams(location.search);
      const type = urlParams.get('type') || 'movie';

      const details = await API.getMovieInfo(id, type);
      console.log(details);  //Depurar
      setMovieDetails(details);
    };

    fetchDetails();
  }, [id, location.search]);

  const handleBack = () => {
    navigate('/home');
  };

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  let firstDate = movieDetails.release_date ? new Date(movieDetails.release_date) : movieDetails.first_air_date ? new Date(movieDetails.first_air_date) : null;
  let genres = movieDetails.genres ? movieDetails.genres.map(genre => genre.name) : [];
  let cast = movieDetails.credits && movieDetails.credits.cast ? movieDetails.credits.cast.slice(0, 5) : [];

  return (
    <div className="details-page">
      <div className="details-container">
        <div className="details-poster">
          {movieDetails.poster_path ? (
            <img src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`} alt={movieDetails.title || movieDetails.name} />
          ) : (
            <div className="no-image">No Image Available</div>
          )}
        </div>
        <div className="details-info">
          <h1 className="details-title">{movieDetails.title || movieDetails.name}</h1>
          <div className="details-points">{movieDetails.vote_average ? `${movieDetails.vote_average} pontos` : 'N/A'}</div>
          <div className="details-year">{firstDate ? firstDate.getFullYear() : 'N/A'}</div>
          <div className="details-runtime">{movieDetails.runtime ? `${movieDetails.runtime} min` : movieDetails.episode_run_time ? `${movieDetails.episode_run_time[0]} min` : 'N/A'}</div>
          <div className="details-genres"><strong>Gêneros:</strong> {genres.join(', ') || 'N/A'}</div>
          <div className="details-overview">{movieDetails.overview || 'No overview available.'}</div>
          {cast.length > 0 && (
            <div className="details-cast">
              <strong>Elenco:</strong> {cast.map(actor => actor.name).join(', ')}
            </div>
          )}
          <div className="details-additional">
            {movieDetails.budget !== undefined && movieDetails.budget > 0 && (
              <p><strong>Orçamento:</strong> ${movieDetails.budget.toLocaleString()}</p>
            )}
            {movieDetails.revenue !== undefined && movieDetails.revenue > 0 && (
              <p><strong>Receita:</strong> ${movieDetails.revenue.toLocaleString()}</p>
            )}
            {movieDetails.production_companies && movieDetails.production_companies.length > 0 && (
              <p><strong>Produzido por:</strong> {movieDetails.production_companies.map(company => company.name).join(', ')}</p>
            )}
            {movieDetails.production_countries && movieDetails.production_countries.length > 0 && (
              <p><strong>País de Origem:</strong> {movieDetails.production_countries.map(country => country.name).join(', ')}</p>
            )}
          </div>
          <button onClick={handleBack} className="back-button">Voltar</button>
        </div>
      </div>
    </div>
  );
};

export default Details;






