import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '35e03337fca9c6068c8f09b84db34ce1';

export const getTrendingMovies = async () => {
  const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
  return response.data;
};

export const getMovieById = async id => {
  const response = await axios.get(`movie/${id}?api_key=${API_KEY}`);
  return response.data;
};
export const getCast = async id => {
  const response = await axios.get(`movie/${id}/credits?api_key=${API_KEY}`);
  return response.data;
};
export const getReviews = async id => {
  const response = await axios.get(`movie/${id}/reviews?api_key=${API_KEY}`);
  return response.data;
};
export const getMovieByName = async movieName => {
  const response = await axios.get(
    `search/movie?query=${movieName}&api_key=${API_KEY}`
  );
  return response.data;
};
