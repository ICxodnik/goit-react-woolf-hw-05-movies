import React from 'react';
import css from 'components/Gallery/index.module.css';
import { GalleryItem } from './GalleryItem';

export const Gallery = props => {
  if (!props.films.length) {
    return (
      <div className={css.info}>
        There are no movies that matched your query
      </div>
    );
  }

  return (
    <div className={css.gallery}>
      {props.films.map(el => (
        <GalleryItem key={el.id} film={el} />
      ))}
    </div>
  );
};
