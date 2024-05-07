import React from 'react';
import { getImageSrc, getImageSrcSet } from 'services/image';
import css from 'components/Gallery/GalleryItem/index.module.css';

export const GalleryItem = ({ film }) => {
  return (
    <div className={css.container}>
      <img
        className={css.poster}
        src={getImageSrc(film.poster_path)}
        srcSet={getImageSrcSet(film.poster_path)}
        alt={film.title}
      ></img>
      <span className={css.title}>{film.title}</span>
      <span className={css.votes}>{film.vote_average}</span>
    </div>
  );
};
