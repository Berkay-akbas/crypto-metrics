import React from "react";
import { useDispatch } from "react-redux";
import { searchCoins } from "../redux/cryptos";
import "../styles/Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faMicrophone } from "@fortawesome/free-solid-svg-icons";

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
            <FontAwesomeIcon icon={faChevronLeft} className="fontawesome" />
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
