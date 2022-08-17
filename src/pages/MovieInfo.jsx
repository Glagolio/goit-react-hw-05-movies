import { getMovieInfo } from '../services/getMovies';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { TailSpin } from 'react-loader-spinner';

const MovieInfo = () => {
  const [movie, setMovie] = useState({});
  const [isLoad, setIsLoad] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieInfo(movieId).then(result => {
      setMovie(result.data);
      setIsLoad(true);
      console.log(movie);
    });
  }, []);
  const { title, poster_path, release_date, popularity, overview, genres } =
    movie;
  const imageURL = `https://image.tmdb.org/t/p/w500${poster_path}`;
  const releaseYear = new Date(release_date).getFullYear();
  return (
    <div>
      {poster_path ? (
        <img src={imageURL} />
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
      <div>
        <h1>
          {title} ({releaseYear})
        </h1>
        <h2>Popularity: {Math.round(popularity)} </h2>
        <h2>Overview</h2>
        <p>{overview}</p>
        <h2>Genres</h2>
        
          {isLoad && ({
            genres.map(genre => {
              return <p key={genre.id}>{genre.name}</p>;
            })
          })}
      
      </div>
    </div>
  );
};

export default MovieInfo;
