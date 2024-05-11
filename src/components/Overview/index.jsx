import React from 'react';
import { useLocation } from 'react-router-dom';

export function Overview() {
  const location = useLocation();
  if (!location.state) {
    return;
  }
  const { film } = location.state;
  return <div className="content">{film.overview}</div>;
}
