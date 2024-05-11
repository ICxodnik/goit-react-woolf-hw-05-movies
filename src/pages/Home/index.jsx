import React, { useEffect, useState } from 'react';
import { getTrending } from '../../services/api';
import { Gallery } from 'components/Gallery';
import css from './index.module.css';

export default function Home() {
  const [recomends, setRecomends] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getLinks()
      .then(value => {
        setRecomends(value);
      })
      .catch(error => setError(error));
  }, []);

  async function getLinks() {
    const data = await getTrending();
    return data;
  }

  if (error) {
    return <div>{error}</div>;
  }
  return (
    <div>
      <div className={css.page}>
        <Gallery films={recomends}></Gallery>
      </div>
    </div>
  );
}
