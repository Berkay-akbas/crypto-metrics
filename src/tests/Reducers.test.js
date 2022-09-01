import coinReducer, { addCoins, searchCoins } from '../redux/cryptos';

test('should return the initial state', () => {
  expect(coinReducer(undefined, { type: undefined })).toEqual({
    coins: [],
    filtered: [],
  });
});

test('should handle a coins being added to an empty list', () => {
  const previousState = {
    coins: [],
    filtered: [],
  };
  const coins = [
    {
      id: 'test',
    },
    {
      id: 'test2',
    },
  ];
  expect(coinReducer(previousState, addCoins(coins))).toEqual({
    coins: [
      {
        id: 'test',
      },
      {
        id: 'test2',
      },
    ],
    filtered: [],
  });
});

test('should handle searching for a coin', () => {
  const previousState = {
    coins: [
      {
        name: 'test1',
      },
      {
        name: 'test2',
      },
    ],
    filtered: [],
  };
  const text = 'test1';
  expect(coinReducer(previousState, searchCoins(text))).toEqual({
    coins: [
      {
        name: 'test1',
      },
      {
        name: 'test2',
      },
    ],
    filtered: [
      {
        name: 'test1',
      },
    ],
  });
});
