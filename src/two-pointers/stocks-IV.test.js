import { stocks, stocksTab } from './stocks-IV';

test('Best Time to Buy and Sell Stock IV', () => {
  expect(stocks(2, [2, 4, 1])).toEqual(2);
  expect(stocks(2, [3, 2, 6, 5, 0, 3])).toEqual(7);

  expect(stocksTab(2, [2, 4, 1])).toEqual(2);
  expect(stocksTab(2, [3, 2, 6, 5, 0, 3])).toEqual(7);
});
