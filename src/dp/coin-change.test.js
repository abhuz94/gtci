import { coinChange, coinChangeTab } from './coin-change';

test('Coin Change', () => {
  expect(coinChange([1, 2, 5], 11)).toEqual(3);
  expect(coinChange([2], 3)).toEqual(-1);
  expect(coinChange([1], 0)).toEqual(0);

  expect(coinChangeTab([1, 2, 5], 11)).toEqual(3);
  expect(coinChangeTab([2], 3)).toEqual(-1);
  expect(coinChangeTab([1], 0)).toEqual(0);
  expect(coinChangeTab([1, 2], 2)).toEqual(1);
});
