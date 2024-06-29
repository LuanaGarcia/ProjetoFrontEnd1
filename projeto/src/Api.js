import axios from 'axios';

const API_Key = 'daaba3f0d435bab8df1a1a709e361e65';
const API_Base = 'https://api.themoviedb.org/3';

const api = axios.create({
  baseURL: API_Base,
});

const basicFetch = async (endpoint) => {
  const req = await api.get(endpoint);
  return req.data;
};

export default {
  getHomeList: async () => {
    return [
      {
        slug: 'originals',
        title: 'Originais GarciaFlix',
        items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_Key}`)
      },
      {
        slug: 'trending',
        title: 'Recomendados para você',
        items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_Key}`)
      },
      {
        slug: 'toprated',
        title: 'Em Alta',
        items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_Key}`)
      },
      {
        slug: 'action',
        title: 'Ação',
        items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_Key}`)
      },
      {
        slug: 'comedy',
        title: 'Comédia',
        items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_Key}`)
      },
      {
        slug: 'horror',
        title: 'Terror',
        items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_Key}`)
      },
      {
        slug: 'romance',
        title: 'Romance',
        items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_Key}`)
      },
      {
        slug: 'documentary',
        title: 'Documentários',
        items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_Key}`)
      },
    ];
  },
  getMovieInfo: async (movieId, type) => {
    if (!movieId) return null;

    const endpoint = type === 'tv' 
      ? `/tv/${movieId}?language=pt-BR&api_key=${API_Key}&append_to_response=credits`
      : `/movie/${movieId}?language=pt-BR&api_key=${API_Key}&append_to_response=credits`;

    try {
      const info = await basicFetch(endpoint);
      if (info.status_code === 34) {
        console.error("Resource not found. Check if the movie ID is correct and the type is 'movie' or 'tv'.");
        return null;
      }
      return info;
    } catch (error) {
      console.error("Failed to fetch movie info:", error);
      return null;
    }
  }
}






