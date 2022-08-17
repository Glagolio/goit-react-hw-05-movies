import LoadMoreButton from 'components/LoadMoreButton/LoadMoreButton';
import { useState, useEffect } from 'react';
import { getTrendsOfMovies } from '../../services/getMovies';
import { Link } from 'react-router-dom';

const MoviesGallery = () => {
  const [movies, setMovies] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);

  const handleLoadMoreButton = () => {
    setPage(prevState => prevState + 1);
  };

  useEffect(() => {
    getTrendsOfMovies(page).then(movies => {
      setMovies(prevState => [...prevState, ...movies.results]);
      setTotal(movies.total_pages);
    });
  }, [page]);

  return (
    <>
      <ul>
        {movies.map(movie => {
          const { title, id } = movie;
          return (
            <li key={id}>
              <Link to={`movies/${id}`}>{title}</Link>
            </li>
          );
        })}
      </ul>
      <LoadMoreButton
        onClick={handleLoadMoreButton}
        disabled={page === total}
      />
    </>
  );
};

export default MoviesGallery;
