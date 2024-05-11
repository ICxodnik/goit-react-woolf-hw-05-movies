import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { getMovieDetails } from '../../services/api';
import { useParams } from 'react-router-dom';
import css from './index.module.css';
import { getImageSrc, getImageSrcSet, getDefaultImage } from 'services/image';

export const MovieDetails = () => {
  const { movieId } = useParams();

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(null);

    if (!movieId) return;
    getData();

    async function getData() {
      try {
        const moviData = await getMovieDetails(movieId);
        setMovie(moviData);
      } catch (ex) {
        setError(ex.message);
      }
    }
  }, [movieId]);

  return (
    <div
      className={css.detailsPage}
      onError={evt => {
        evt.target.src = getDefaultImage();
        evt.target.srcset = '';
      }}
    >
      <Link to={backLinkHref} className="button">
        ← Back to search
      </Link>
      {error && <div className={css.error}>{error}</div>}
      {movie && (
        <div className={css.movie}>
          <div className={css.movieData}>
            <img
              className={css.poster}
              src={getImageSrc(movie.poster_path)}
              srcSet={getImageSrcSet(movie.poster_path)}
              alt={movie.title ?? movie.name}
              height="600px"
            ></img>
            <div className={css.movieInfo}>
              <div className={css.generalInfo}>
                <span className={css.name}>{movie.title ?? movie.name}</span>
                <span className={css.title}>
                  {movie.genres.map(g => g.name).join(', ')}
                </span>
              </div>
              <div className={css.additionalInfo}>
                <span className={css.title}>Rating:</span>
                <span className={css.value}>
                  {Math.ceil(movie.vote_average * 10)}%
                </span>
                <span className={css.title}>Release date:</span>
                <span className={css.value}>{movie.release_date}</span>
                <span className={css.title}>Status:</span>
                <span className={css.value}>{movie.status}</span>
                <span className={css.title}>Country:</span>
                <span className={css.value}>{movie.origin_country[0]}</span>
              </div>
              <div className="buttons">
                <NavLink
                  end
                  to={`/movies/${movie.id}`}
                  state={{ film: movie, from: backLinkHref }}
                  className="button"
                >
                  Overview
                </NavLink>
                <NavLink
                  to={`/movies/${movie.id}/cast`}
                  state={{ from: backLinkHref }}
                  className="button"
                >
                  Cast
                </NavLink>

                <NavLink
                  to={`/movies/${movie.id}/reviews`}
                  state={{ from: backLinkHref }}
                  className="button"
                >
                  Reviews
                </NavLink>
              </div>
              <Outlet />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
