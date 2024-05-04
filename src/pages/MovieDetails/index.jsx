import React from 'react';
import { useParams } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

export const MovieDetails = () => {
  const { movieId } = useParams();

  return (
    <div>
      MovieDetails {movieId}
      <Outlet />
    </div>
  );
};
