import numberRange from './number-range';

test('Number Range', () => {
  expect(numberRange([5, 7, 7, 8, 8, 10], 8)).toEqual([3, 4]);
  expect(numberRange([5, 7, 7, 8, 8, 10], 6)).toEqual([-1, -1]);
  expect(numberRange([], 6)).toEqual([-1, -1]);
  expect(numberRange([4, 6, 6, 6, 9], 6)).toEqual([1, 3]);
  expect(numberRange([1, 3, 8, 10, 15], 10)).toEqual([3, 3]);
  expect(numberRange([1, 3, 8, 10, 15], 12)).toEqual([-1, -1]);
});
