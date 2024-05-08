import React, { useEffect, useState } from 'react';
import { getMovie } from '../../services/api';
import css from './index.module.css';
import { Gallery } from 'components/Gallery';

export const Movies = () => {
  const defaultPage = 1;
  const [searchResult, setSearchResult] = useState([]);
  const [filter, setFilter] = useState('');
  const [page, setPage] = useState(defaultPage);
  const [error, setError] = useState(null);

  useEffect(() => {
    getLinks()
      .then(value => {
        setSearchResult(value);
      })
      .catch(error => setError(error));
  }, [filter, page]);

  const handleFilter = e => {
    setPage(null);
    setPage(defaultPage);
    setFilter(e.currentTarget.value);
  };

  const onHandlePrevPage = e => {
    if (page === defaultPage) {
      return;
    }
    setPage(page - 1);
  };

  const onHandleNextPage = e => {
    setPage(page + 1);
  };

  async function getLinks() {
    const data = await getMovie(filter, page);
    return data;
  }

  if (!searchResult.length) {
    return (
      <div className={css.page}>
        <input
          className={css.input}
          value={filter}
          onChange={handleFilter}
        ></input>
        <div className={css.info}>
          There are no movies that matched your query
        </div>
      </div>
    );
  }
  return (
    <div className={css.page}>
      <input
        className={css.input}
        value={filter}
        onChange={handleFilter}
      ></input>
      <Gallery films={searchResult}></Gallery>
      <div className={css.pages}>
        <button onClick={onHandlePrevPage}>Prev Page</button>
        <span>{page}</span>
        <button onClick={onHandleNextPage}>Next Page</button>
      </div>
    </div>
  );
};
