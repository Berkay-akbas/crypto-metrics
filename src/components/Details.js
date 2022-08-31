import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import CryptoItem from "./CryptoItem";
import "../styles/Details.css";
import NumberFormat from "react-number-format";

const Details = () => {
  const { state } = useLocation();
  const coins = useSelector((state) => state.coins);
  const coin = coins.filter((coin) => coin.id === state.id);
  console.log(coin[0].price_change_percentage_24h);
  return (
    <>
      <CryptoItem
        key={coin[0].id}
        id={coin[0].id}
        name={coin[0].name}
        image={coin[0].image}
        current_price={coin[0].current_price}
        market_cap={coin[0].market_cap}
        market_cap_rank={coin[0].market_cap_rank}
        total_volume={coin[0].total_volume}
        price_change_percentage_24h={coin[0].price_change_percentage_24h}
      />
      <div className="details-stats">Stats</div>
      <div className="stat">
        <div className="stat-name">Market Cap Rank</div>
        <div className="stat-value">{coin[0].market_cap_rank}</div>
      </div>
      <div className="stat">
        <div className="stat-name">Market Cap</div>
        <div className="stat-value">
          <NumberFormat
            value={coin[0].market_cap}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
          />
        </div>
      </div>
      <div className="stat">
        <div className="stat-name">Total Volume</div>
        <div className="stat-value">
          <NumberFormat
            value={coin[0].total_volume}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
          />
        </div>
      </div>
      <div className="stat">
        <div className="stat-name">Price Change (24h)</div>

        <div
          className="stat-value"
          style={{
            color:
              Math.sign(coin[0].price_change_percentage_24h) < 0
                ? "red"
                : "green",
          }}
        >
          <NumberFormat
            suffix={"%"}
            displayType={"text"}
            value={coin[0].price_change_percentage_24h.toFixed(2)}
          />
        </div>
      </div>
    </>
  );
};

export default Details;
