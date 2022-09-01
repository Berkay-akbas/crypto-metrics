import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import coinReducer from './cryptos';

export const setupStore = (preloadedState) => configureStore({
  reducer: coinReducer,
  middleware: [thunk],
  preloadedState,
});

const store = configureStore({
  reducer: coinReducer,
  middleware: [thunk],
});

export default store;
