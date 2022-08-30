const ADDED_COINS = "crypto-metrics/src/redux/ADDED_COINS";
const SEARCH_COINS = "crypto-metrics/src/redux/SEARCH_COINS";

const initialState = {
  coins: [],
  filtered: [],
};

const coinReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDED_COINS:
      return {
        ...state,
        coins: [...state.coins, ...action.payload],
      };
    case SEARCH_COINS:
      /* eslint-disable no-case-declarations */
      const filteredCoins = state.coins.filter((coin) =>
        coin.name.toLowerCase().includes(action.payload.toLowerCase())
      );

      return {
        ...state,
        filtered: action.payload === "" ? [] : filteredCoins,
      };
    default:
      return state;
  }
};

export default coinReducer;

export const addCoins = (coins) => ({
  type: ADDED_COINS,
  payload: coins,
});

export const searchCoins = (text) => ({
  type: SEARCH_COINS,
  payload: text,
});

export const fetchCoins = () => async (dispatch) => {
  const response = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=300&page=1&sparkline=false&price_change_percentage=24h"
  );
  const data = await response.json();
  const coins = data.map((coin) => ({
    id: coin.id,
    name: coin.name,
    image: coin.image,
    current_price: coin.current_price,
    market_cap: coin.market_cap,
    market_cap_rank: coin.market_cap_rank,
    total_volume: coin.total_volume,
    price_change_percentage_24h: coin.price_change_percentage_24h,
  }));
  dispatch(addCoins(coins));
};
