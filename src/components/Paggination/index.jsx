import React from 'react';
import css from './index.module.css';

const Paggination = props => {
  return (
    <div className={css.pages}>
      <button className="button" onClick={props.onHandlePrevPage}>
        Prev Page
      </button>
      <span>{props.page}</span>
      <button className="button" onClick={props.onHandleNextPage}>
        Next Page
      </button>
    </div>
  );
};

export default Paggination;
