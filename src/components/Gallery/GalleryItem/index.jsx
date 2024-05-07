import React from 'react';
import { getImageSrc, getImageSrcSet, getDefaultImage } from 'services/image';
import css from 'components/Gallery/GalleryItem/index.module.css';

export const GalleryItem = ({ film }) => {
  return (
    <div className={css.container}>
      <img
        className={css.poster}
        src={getImageSrc(film.poster_path)}
        srcSet={getImageSrcSet(film.poster_path)}
        alt={film.title ?? film.name}
        width="220px"
        height="330px"
        style={getDefaultImage()}
      ></img>
      <span className={css.title}>{film.title ?? film.name}</span>
      <span className={css.votes}>{film.vote_average.toFixed(1)}</span>
    </div>
  );
};
