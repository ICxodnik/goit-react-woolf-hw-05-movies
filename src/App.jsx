import { Routes, Route, NavLink } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import Loader from 'components/Loader';

const Home = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('pages/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));
const Cast = lazy(() => import('components/Cast'));
const Overview = lazy(() => import('components/Overview'));
const Reviews = lazy(() => import('components/Reviews'));

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

      <Suspense fallback={<Loader hide={false} />}>
        <Routes>
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route index element={<Overview />} />
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
    </div>
  );
};
