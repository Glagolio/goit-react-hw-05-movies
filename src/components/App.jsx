import SharedLayout from './SharedLayout/SharedLayout';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { getTrendsOfMovies } from '../services/getMovies';
import { useState, useEffect } from 'react';
export const App = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getTrendsOfMovies().then(movies => setMovies(movies));
  }, []);

  console.log(movies);

  return (
    <BrowserRouter basename="/goit-react-hw-05-movies/">
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<div>Home</div>} />
          <Route path="/movies" element={<div>Movies</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
