import React, { useEffect, useState } from 'react';
import { getTrending } from '../../services/api';
import { Gallery } from 'components/Gallery';

export const Home = () => {
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
    console.log(data);
    return data;
  }
  return (
    <div>
      <Gallery films={recomends}></Gallery>
    </div>
  );
};
