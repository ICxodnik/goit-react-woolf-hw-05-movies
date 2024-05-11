import { useEffect, useState } from 'react';
import { getMovieReviews } from '../../services/api';
import { useParams } from 'react-router-dom';
import css from './index.module.css';
import { getImageSrc } from 'services/image';
import Loader from '../Loader';

export default function Reviews() {
  const { movieId } = useParams();

  const [review, setReview] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setError(null);

    if (!movieId) return;
    getData();

    async function getData() {
      try {
        setIsLoading(true);
        const data = await getMovieReviews(movieId);
        setReview(data);
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
  if (error) {
    return <div className={css.reviews}>{error}</div>;
  }
  if (!review || !review.length) {
    return (
      <div className={css.reviews}>
        We don't have any reviews for this movie.
      </div>
    );
  }
  return (
    <div className={css.reviews}>
      {review.map(rw => (
        <div className={css.review} key={rw.id}>
          <div className={css.reviewHeader}>
            <div className={css.imageWrapper}>
              <img
                className={css.poster}
                src={getImageSrc(rw.author_details.avatar_path)}
                height="60px"
                alt={rw.author}
              ></img>
            </div>
            <span className={css.author}>{rw.author}</span>
          </div>
          <span className="content">{rw.content}</span>
        </div>
      ))}
    </div>
  );
}
