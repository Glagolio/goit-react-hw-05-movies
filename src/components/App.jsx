import SharedLayout from './SharedLayout/SharedLayout';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
export const App = () => {
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
