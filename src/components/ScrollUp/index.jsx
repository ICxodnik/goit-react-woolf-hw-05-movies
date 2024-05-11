import React from 'react';

export const ScrollUp = () => {
  const handleScrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div className="smallButton">
      <span className="content" onClick={handleScrollUp}>
        scroll up ▲
      </span>
    </div>
  );
};
