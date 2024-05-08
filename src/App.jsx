import { Routes, Route, NavLink } from 'react-router-dom';
import { Movies } from 'pages/Movies';
import { Home } from 'pages/Home';
import { MovieDetails } from 'pages/MovieDetails';
import { Cast } from 'components/Cast';
import { Reviews } from 'components/Reviews';

export const App = () => {
  return (
    <div className="mainPage">
      <nav>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>

      <Routes>
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId/" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};
