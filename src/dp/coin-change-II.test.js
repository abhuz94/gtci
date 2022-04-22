import { coinChange, coinChangeTab } from './coin-change-II';

test('Coin Change 2', () => {
  expect(coinChange(5, [1, 2, 5])).toEqual(4);
  expect(coinChange(3, [2])).toEqual(0);
  expect(coinChange(10, [10])).toEqual(1);

  expect(coinChangeTab(5, [1, 2, 5])).toEqual(4);
  expect(coinChangeTab(3, [2])).toEqual(0);
  expect(coinChangeTab(10, [10])).toEqual(1);
});
