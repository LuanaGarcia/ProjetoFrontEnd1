import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from "./Api.js";
import Catalogo from './Catalogo';

const Home = () => {
  const [movieList, setMovieList] = useState([]);
  const navigate = useNavigate();
      
        useEffect(() => {
          const loadAll = async () => {
            // Pegando a lista total
            let list = await API.getHomeList();
            setMovieList(list);
          };

          loadAll();
        }, []);

  const goToDetails = () => {
    navigate('/details');
  };

  return (
      <div className='page'>
          <section className='lists'>
              {movieList.map((item, key) => (
                  <Catalogo key={key} title={item.title} items={item.items}/>
              ))}
          </section>
      </div>
  );
};

export default Home;

