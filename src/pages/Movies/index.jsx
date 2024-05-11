import React, { useEffect, useState } from 'react';
import { getMovie } from '../../services/api';
import css from './index.module.css';
import { Gallery } from 'components/Gallery';
import { useSearchParams } from 'react-router-dom';

export default function Movies() {
  const defaultPage = 1;

  const [searchParams, setSearchParams] = useSearchParams();
  const [searchResult, setSearchResult] = useState([]);

  const filter = searchParams.get('filter') ?? '';
  // const [filter, setFilter] = useState('');
  const [page, setPage] = useState(defaultPage);
  const [error, setError] = useState(null);

  useEffect(() => {
    getLinks()
      .then(value => {
        setSearchResult(value);
      })
      .catch(error => setError(error));

    async function getLinks() {
      const data = await getMovie(filter, page);
      return data;
    }
  }, [filter, page]);

  const handleFilter = e => {
    setPage(null);
    setPage(defaultPage);
    setSearchParams({ filter: e.currentTarget.value });
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

  if (error) {
    return <div>{error}</div>;
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
        <button className="button" onClick={onHandlePrevPage}>
          Prev Page
        </button>
        <span>{page}</span>
        <button className="button" onClick={onHandleNextPage}>
          Next Page
        </button>
      </div>
    </div>
  );
}
