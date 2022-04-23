import { stocksFee, stocksFeeTab } from './stocks-fee';

test('Best Time to Buy and Sell Stock with Transaction Fee', () => {
  expect(stocksFee([1, 3, 2, 8, 4, 9], 2)).toEqual(8);
  expect(stocksFee([1, 3, 7, 5, 10, 3], 3)).toEqual(6);

  expect(stocksFeeTab([1, 3, 2, 8, 4, 9], 2)).toEqual(8);
  expect(stocksFeeTab([1, 3, 7, 5, 10, 3], 3)).toEqual(6);
});
