import squareSortedArray from './squares-sorted-array';

test('Squares of a Sorted Array', () => {
  expect(squareSortedArray([-4, -1, 0, 3, 10])).toEqual([0, 1, 9, 16, 100]);
});
