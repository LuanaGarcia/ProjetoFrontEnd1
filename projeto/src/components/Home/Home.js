import React, { useEffect, useState } from 'react';
import API from '../../Api.js';
import Catalogo from '../Catalogo/Catalogo.js';
import './Home.css';
import Destaque from '../Destaque/Destaque.js';
import Header from '../Header/Header.js';

const Home = () => {
  const [movieList, setMovieList] = useState([]);
  const [destaqueData, setDestaqueData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      // Pegando a lista total
      let list = await API.getHomeList();
      setMovieList(list);

      // Pegando o filme em destaque
      let originals = list.filter(i => i.slug === 'originals');
      if (originals.length > 0) {
        let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
        let chosen = originals[0].items.results[randomChosen];
        if (chosen && chosen.id) {
          let chosenInfo = await API.getMovieInfo(chosen.id, 'tv');
          setDestaqueData(chosenInfo);
        }
      }
    };
    loadAll();
  }, []);

        useEffect(()=>{
          const scrollListener = () => {
            if(window.scrollY > 10) {
              setBlackHeader(true);
            } else{
              setBlackHeader(false);
            }

          }
            window.addEventListener('scroll', scrollListener);
            return() => {
              window.removeEventListener('scroll', scrollListener);
            }

        },[]);

  return (
    <div className='page'>
      <Header black={blackHeader} />
      {destaqueData && <Destaque item={destaqueData} />}
      <section className='lists'>
        {movieList.map((item, key) => (
          <Catalogo key={key} title={item.title} items={item.items} />
        ))}
      </section>

      <footer>
        <p>Trabalho Front-end 1 - Luana Grcia.</p>
        <p>Direitos para Netiflix.</p>
        <p> Dados coletados do site Themoviebd.org.</p>
        <p></p>
      </footer>
    </div>
  );
};

export default Home;

