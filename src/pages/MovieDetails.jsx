import { getMovieInfo } from '../services/getMovies';
import { useState, useEffect } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { TailSpin } from 'react-loader-spinner';
import { Link } from 'react-router-dom';

const MovieInfo = () => {
  const [movie, setMovie] = useState({});
  const [isLoad, setIsLoad] = useState(false);
  const { movieId } = useParams();

  const location = useLocation();
  const backLink = location.state?.from;
  console.log(backLink);

  useEffect(() => {
    getMovieInfo(movieId).then(result => {
      setMovie(result.data);
      setIsLoad(true);
    });
  }, [movieId]);
  const { title, poster_path, release_date, popularity, overview, genres } =
    movie;
  const imageURL = `https://image.tmdb.org/t/p/w500${poster_path}`;
  const releaseYear = new Date(release_date).getFullYear();
  return (
    <div>
      {isLoad ? (
        <>
          <Link to={backLink}>Back</Link>
          <img src={imageURL} width="400" alt={title} />

          <div>
            <h1>
              {title} ({releaseYear})
            </h1>
            <h2>Popularity: {Math.round(popularity)} </h2>
            <h2>Overview</h2>
            <p>{overview}</p>
            <h2>Genres</h2>
            {genres.map(genre => {
              return <p key={genre.id}>{genre.name}</p>;
            })}
          </div>
          <hr />
          <p>Additional information</p>
          <ul>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>
          <hr />
        </>
      ) : (
        <TailSpin
          height="80"
          width="80"
          color="#000"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      )}
      <Outlet />
    </div>
  );
};

export default MovieInfo;
