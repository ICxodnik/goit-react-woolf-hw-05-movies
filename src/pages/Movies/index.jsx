import React, { useEffect, useState } from 'react';
import { getMovie } from '../../services/api';
import css from './index.module.css';
import { Gallery } from 'components/Gallery';
import Paggination from 'components/Paggination';
import { Message } from '../../components/Message';
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
    return <Message level="error" message={error} />;
  }

  return (
    <div className={css.page}>
      <input
        className={css.input}
        value={filter}
        onChange={handleFilter}
      ></input>
      {searchResult.length ? (
        <>
          <Gallery films={searchResult}></Gallery>
          <Paggination
            page={page}
            onHandlePrevPage={onHandlePrevPage}
            onHandleNextPage={onHandleNextPage}
          />
        </>
      ) : (
        <Message
          level="info"
          message="There are no movies that matched your query"
        />
      )}
    </div>
  );
}
