import React from 'react';
import css from 'components/Gallery/index.module.css';
import { GalleryItem } from './GalleryItem';

export const Gallery = props => {
  return (
    <div className={css.gallery}>
      {props.films.map(el => (
        <GalleryItem key={el.id} film={el} />
      ))}
    </div>
  );
};
