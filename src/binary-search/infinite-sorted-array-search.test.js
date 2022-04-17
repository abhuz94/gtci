import infiniteSortedArraySearch from './infinite-sorted-array-search';

test('Search in a Sorted Infinite Array', () => {
  expect(infiniteSortedArraySearch([4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30], 16))
    .toEqual(6);
  expect(infiniteSortedArraySearch([4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30], 11))
    .toEqual(-1);
  expect(infiniteSortedArraySearch([1, 3, 8, 10, 15], 15))
    .toEqual(4);
  expect(infiniteSortedArraySearch([1, 3, 8, 10, 15], 200))
    .toEqual(-1);
});
