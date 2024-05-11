import { useEffect, useState } from 'react';
import { getMovieCredits } from '../../services/api';
import { useParams } from 'react-router-dom';
import css from './index.module.css';
import { getImageSrc } from 'services/image';
import Loader from '../Loader';

export const Cast = () => {
  const { movieId } = useParams();

  const [cast, setCast] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setError(null);

    if (!movieId) return;
    getData();

    async function getData() {
      try {
        setIsLoading(true);
        const data = await getMovieCredits(movieId);
        console.log(data);
        setCast(data);
      } catch (ex) {
        setError(ex.message);
      } finally {
        setIsLoading(false);
      }
    }
  }, [movieId]);

  if (isLoading) {
    return <Loader hide={!isLoading} />;
  }
  if (!cast || !cast.length) {
    return (
      <div className={css.reviews}>We don't have any casts for this movie.</div>
    );
  }
  return (
    <div className={css.reviews}>
      {cast
        .filter(act => act.profile_path)
        .map(act => (
          <div className={css.cast} key={act.id}>
            <div className={css.imageWrapper}>
              <img
                className={css.poster}
                src={getImageSrc(act.profile_path)}
                height="60px"
                alt={act.name}
              ></img>
            </div>
            <span className="content">{act.name}</span>
          </div>
        ))}
    </div>
  );
};
