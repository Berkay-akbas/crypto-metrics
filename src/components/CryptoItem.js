import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

/* eslint-disable */
const CryptoItem = (props) => {
  const {
    id,
    name,
    image,
    current_price,
    market_cap,
    market_cap_rank,
    total_volume,
    price_change_percentage_24h,
  } = props;
  /* eslint-enable */
  return (
    <div className="coin-item">
      <Link to={`/${id}`} state={{ id: `${id}` }}>
        <FontAwesomeIcon icon={faCircleArrowRight} className="circle-arrow" />
      </Link>
      <img src={image} alt={name} className="coin-image" />
      <div className="coin-info">
        <div className="coin-name">{name}</div>
        <div className="coin-price">
          {current_price}
          {' '}
          $
        </div>
      </div>
    </div>
  );
};

export default CryptoItem;
