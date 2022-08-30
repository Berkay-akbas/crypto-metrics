import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCoins } from "../redux/cryptos";
import CryptoItem from "./CryptoItem";
import "../styles/CryptoList.css";

const CryptoList = () => {
  const dispatch = useDispatch();
  const coins = useSelector((state) => state.coins);
  const filtered = useSelector((state) => state.filtered);
  const nope = useSelector((state) => state.nope);

  useEffect(() => {
    if (coins.length === 0) {
      dispatch(fetchCoins());
    }
  }, []);

  return (
    <>
      <div>
        {filtered.length === 0 && (
          <div className="coins-holder">
            {coins.map((val) => (
              <CryptoItem
                key={val.id}
                id={val.id}
                name={val.name}
                image={val.image}
                current_price={val.current_price}
                market_cap={val.market_cap}
                market_cap_rank={val.market_cap_rank}
                total_volume={val.total_volume}
                price_change_percentage_24h={val.price_change_percentage_24h}
              />
            ))}
          </div>
        )}
        {filtered && (
          <div className="coins-holder">
            {filtered.map((val) => (
              <CryptoItem
                key={val.id}
                id={val.id}
                name={val.name}
                image={val.image}
                current_price={val.current_price}
                market_cap={val.market_cap}
                market_cap_rank={val.market_cap_rank}
                total_volume={val.total_volume}
                price_change_percentage_24h={val.price_change_percentage_24h}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default CryptoList;
