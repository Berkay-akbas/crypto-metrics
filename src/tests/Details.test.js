import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/configureStore';
import CryptoList from '../components/Cryptolist';

test('fetches & receives a mission after the api call', async () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <CryptoList />
      </BrowserRouter>
    </Provider>,
  );

  expect(await screen.findAllByText(/Bitcoin/i)).toHaveLength(5);
});

test('Shows the data after going into details component', async () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <CryptoList />
      </BrowserRouter>
    </Provider>,
  );

  expect(await screen.findByText(/tether gold/i)).toBeInTheDocument();
});
