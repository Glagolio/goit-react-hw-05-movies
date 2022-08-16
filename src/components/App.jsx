import SharedLayout from './SharedLayout/SharedLayout';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { getTrendsOfMovies } from '../services/getMovies';
import { useState, useEffect } from 'react';
export const App = () => {
  const [movies, setMovies] = useState(null);
  useEffect(() => {
    getTrendsOfMovies().then(movies => setMovies(movies));
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<div>Home</div>} />
          <Route path="/movies" element={<div>Movies</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
