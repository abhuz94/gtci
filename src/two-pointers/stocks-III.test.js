import { stocks, stocksTab } from './stocks-III';

test('Best Time to Buy and Sell Stock III', () => {
  expect(stocks([3, 3, 5, 0, 0, 3, 1, 4])).toEqual(6);
  expect(stocks([1, 2, 3, 4, 5])).toEqual(4);
  expect(stocks([7, 6, 4, 3, 1])).toEqual(0);

  expect(stocksTab([3, 3, 5, 0, 0, 3, 1, 4])).toEqual(6);
  expect(stocksTab([1, 2, 3, 4, 5])).toEqual(4);
  expect(stocksTab([7, 6, 4, 3, 1])).toEqual(0);
});
