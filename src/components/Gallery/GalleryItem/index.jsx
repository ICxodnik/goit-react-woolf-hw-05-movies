import React from 'react';
import { getImageSrc, getImageSrcSet, getDefaultImage } from 'services/image';
import { Link, useLocation } from 'react-router-dom';

import css from 'components/Gallery/GalleryItem/index.module.css';

export const GalleryItem = ({ film }) => {
  const location = useLocation();
  return (
    <Link
      className={css.container}
      onError={evt => {
        evt.target.src = getDefaultImage();
        evt.target.srcset = '';
      }}
      to={`/movies/${film.id}`}
      state={{ from: location, film }}
    >
      <img
        className={css.poster}
        src={getImageSrc(film.poster_path)}
        srcSet={getImageSrcSet(film.poster_path)}
        alt={film.title ?? film.name}
        width="220px"
        height="330px"
      ></img>
      <span className={css.title}>{film.title ?? film.name}</span>
      <span className={css.votes}>{film.vote_average.toFixed(1)}</span>
    </Link>
  );
};
