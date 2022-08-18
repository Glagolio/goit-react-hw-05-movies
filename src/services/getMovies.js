import axios from 'axios';

const KEY = '659c146febfafc17fd54baa17527f7fa';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getTrendsOfMovies = async page => {
  const response = await axios.get(
    `/trending/movie/day?api_key=${KEY}&page=${page}`
  );
  return response.data;
};

export const getMovieInfo = async id => {
  const response = await axios.get(
    `/movie/${id}?api_key=${KEY}&language=en-US`
  );
  return response;
};

export const getMovieReviews = async id => {
  const response = await axios.get(
    `movie/${id}/reviews?api_key=${KEY}&language=en-US&page=1`
  );
  return response.data.results;
};

export const getMovieCredits = async id => {
  const response = await axios.get(
    `/movie/${id}/credits?api_key=${KEY}&language=en-US`
  );
  return response.data.cast;
};

export const getSearchQuery = async (page, query) => {
  const response = await axios.get(
    `search/movie?api_key=${KEY}&query=${query}&page=${page}`
  );
  return response.data;
};
