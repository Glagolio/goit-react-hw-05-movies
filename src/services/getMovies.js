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
  return response;
};

export const getMovieCredits = async id => {
  const response = await axios.get(
    `/movie/${id}/credits?api_key=${KEY}&language=en-US`
  );
  return response.data.cast;
};
