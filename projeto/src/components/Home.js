<<<<<<< HEAD:projetol/src/components/Home.js
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
=======
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
>>>>>>> 24a28e3b891fa4d82bb3977fcb575a801fc3cdf1:projeto/src/components/Home.js

  const goToDetails = () => {
    navigate('/details');
  };

<<<<<<< HEAD:projetol/src/components/Home.js
  return (
      <div className='page'>
          <section className='lists'>
              {movieList.map((item, key) => (
                  <Catalogo key={key} title={item.title} items={item.items}/>
              ))}
          </section>
      </div>
=======
  return React.createElement(
    'div',
    null,
    React.createElement('h1', null, 'Home Page'),
    React.createElement('button', { onClick: goToDetails }, 'Go to Details')
>>>>>>> 24a28e3b891fa4d82bb3977fcb575a801fc3cdf1:projeto/src/components/Home.js
  );
};

export default Home;
<<<<<<< HEAD:projetol/src/components/Home.js

=======
>>>>>>> 24a28e3b891fa4d82bb3977fcb575a801fc3cdf1:projeto/src/components/Home.js
