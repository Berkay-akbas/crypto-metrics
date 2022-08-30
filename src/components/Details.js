import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

const Details = () => {
  const { state } = useLocation();
  /* eslint-disable-next-line */
  const coins = useSelector((state) => state.coins);
  return (
    <>
      <div>{state.id}</div>
    </>
  );
};

export default Details;
