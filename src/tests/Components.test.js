import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import CryptoItem from '../components/CryptoItem';
import Navbar from '../components/Navbar';

import store from '../redux/configureStore';

it('CryptoItem component test', () => {
  const CryptoItemTest = renderer
    .create(
      <Router>
        <CryptoItem />
      </Router>,
    )
    .toJSON();
  expect(CryptoItemTest).toMatchSnapshot();
});

it('Details component test', () => {
  const DetailsTest = renderer
    .create(
      <Provider store={store}>
        <Router>
          <Navbar />
        </Router>
      </Provider>,
    )
    .toJSON();
  expect(DetailsTest).toMatchSnapshot();
});

it('Navbar component test', () => {
  const NavbarTest = renderer
    .create(
      <Provider store={store}>
        <Router>
          <Navbar />
        </Router>
      </Provider>,
    )
    .toJSON();
  expect(NavbarTest).toMatchSnapshot();
});
