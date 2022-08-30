import React from 'react';
import { useDispatch } from 'react-redux';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faGear,
  faMicrophone,
} from '@fortawesome/free-solid-svg-icons';
import { searchCoins } from '../redux/cryptos';

const Navbar = () => {
  const dispatch = useDispatch();

  const onChangeHandler = (e) => {
    dispatch(searchCoins(e.target.value));
  };

  return (
    <div className="homeNav">
      <div className="navlinks">
        <h1 className="title">Crypto Metrics</h1>
        <ul className="holder">
          <li className="lefts">
            <Link to="/" className="link">
              <FontAwesomeIcon icon={faChevronLeft} className="fontawesome" />
            </Link>
          </li>
          <li className="center">
            <input
              className="search"
              placeholder="Search..."
              onChange={onChangeHandler}
            />
          </li>
          <li className="rights">
            <FontAwesomeIcon icon={faMicrophone} className="fontawesome" />
            <FontAwesomeIcon icon={faGear} className="fontawesome" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
