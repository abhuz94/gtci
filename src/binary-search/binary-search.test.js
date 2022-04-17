import binarySearch from './binary-search';

test('Binary Search', () => {
  expect(binarySearch([-1, 0, 3, 5, 9, 12], 9)).toEqual(4);
});
