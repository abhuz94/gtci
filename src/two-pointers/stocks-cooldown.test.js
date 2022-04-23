import stocksCooldown from './stocks-cooldown';

test('Best Time to Buy and Sell Stock with Cooldown', () => {
  expect(stocksCooldown([1, 2, 3, 0, 2])).toEqual(3);
  expect(stocksCooldown([1])).toEqual(0);
});
