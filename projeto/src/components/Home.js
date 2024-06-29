import React, { useEffect, useState } from 'react';
import API from './Api.js';
import Catalogo from './Catalogo';
import './Home.css';
import Destaque from './Destaque.js'

const Home = () => {
  const [movieList, setMovieList] = useState([]);
  const [destaqueData, setDestaqueData] = useState(null);

        useEffect(() => {
          const loadAll = async () => {
            // Pegando a lista total
            let list = await API.getHomeList();
            setMovieList(list);

            //Pegando o filme em destaque
              let originals = list.filter(i=>i.slug ==='originals');
              let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length -1));
              let chosen = originals[0].items.results[randomChosen];
              let chosenInfo = await API.getMovieInfo(chosen.id, 'tv');
                 setDestaqueData(chosenInfo)

          }
          loadAll();
        }, []);
    return (
        <div className='page'>

            {destaqueData && 
              <Destaque item = {destaqueData}/>
            }

            <section className='lists'>
                {movieList.map((item, key) => (
                    <Catalogo key={key} title={item.title} items={item.items}/>
                ))}
            </section>
        </div> 
    )
};

export default Home;
