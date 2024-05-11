import { Routes, Route, NavLink } from 'react-router-dom';
import { Movies } from 'pages/Movies';
import { Home } from 'pages/Home';
import { MovieDetails } from 'pages/MovieDetails';
import { Cast } from 'components/Cast';
import { Overview } from 'components/Overview';
import { Reviews } from 'components/Reviews';

export const App = () => {
  return (
    <div className="mainPage">
      <nav>
        <NavLink className="navLink" to="/" end>
          Trending
        </NavLink>
        <NavLink className="navLink" to="/movies">
          Search Movies
        </NavLink>
      </nav>

      <Routes>
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route index element={<Overview />} />
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};
