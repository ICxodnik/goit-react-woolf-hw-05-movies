import { useEffect, useState, useMemo } from 'react';
import { getMovieCredits } from '../../services/api';
import { useParams } from 'react-router-dom';
import css from './index.module.css';
import { getImageSrc } from 'services/image';
import Loader from '../Loader';
import { ScrollUp } from 'components/ScrollUp';
import { Message } from 'components/Message';

export default function Cast() {
  const maxSize = 12;
  const maxScrollSize = 24;
  const unlimeted = -1;

  const { movieId } = useParams();

  const [showAllSelected, setShowAllSelected] = useState(false);
  const [cast, setCast] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setError(null);
    if (!movieId) {
      return;
    }
    getData();

    async function getData() {
      try {
        setIsLoading(true);
        const data = await getMovieCredits(movieId);
        setCast(data);
      } catch (ex) {
        setError(ex.message);
      } finally {
        setIsLoading(false);
      }
    }
  }, [movieId]);

  const memoizedData = useMemo(() =>
    cast
      ? cast.sort((act1, act2) => act2.popularity - act1.popularity)
      : [][cast]
  );

  const handleShowAll = () => {
    setShowAllSelected(true);
  };

  if (isLoading) {
    return <Loader hide={!isLoading} />;
  }
  if (error) {
    return <Message level="error" message={error} />;
  }
  if (!cast || !cast.length) {
    return (
      <Message level="info" message="We don't have any casts for this movie." />
    );
  }

  return (
    <>
      <div className={css.reviews}>
        {memoizedData
          .slice(0, showAllSelected ? unlimeted : maxSize) //works one time
          .map(act => (
            <div className={css.cast} key={act.credit_id}>
              <div className={css.imageWrapper}>
                <img
                  className={css.poster}
                  src={getImageSrc(act.profile_path)}
                  height="60px"
                  alt={act.name}
                ></img>
              </div>
              <div className="info">
                <p className="content">{act.name}</p>
                <p className={css.character}>{act.character}</p>
              </div>
            </div>
          ))}
      </div>
      {cast.length > maxSize &&
        (showAllSelected ? (
          cast.length > maxScrollSize && <ScrollUp />
        ) : (
          <div className="smallButton">
            <span className="content" onClick={handleShowAll}>
              show all ▼
            </span>
          </div>
        ))}
    </>
  );
}
