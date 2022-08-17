import SharedLayout from './SharedLayout/SharedLayout';
import Home from 'pages/Home';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

export const App = () => {
  return (
    <BrowserRouter basename="/goit-react-hw-05-movies/">
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<div>Movies</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
