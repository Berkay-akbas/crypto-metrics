import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const CryptoItem = (props) => {
  const {
    id, name, image, current_price,
  } = props;
  return (
    <div className="coin-item">
      <Link
        to={`/${id}`}
        state={{ id: `${id}` }}
        style={{ textDecoration: 'none' }}
      >
        <div className="info-holder">
          <FontAwesomeIcon icon={faCircleArrowRight} className="circle-arrow" />
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
      </Link>
    </div>
  );
};

export default CryptoItem;
