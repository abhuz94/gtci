import minWindowSort from './min-window-sort';

test('Shortest Unsorted Continuous Subarray', () => {
  expect(minWindowSort([2, 6, 4, 8, 10, 9, 15])).toEqual(5);
  expect(minWindowSort([1, 2, 3, 4])).toEqual(0);
  expect(minWindowSort([1])).toEqual(0);
  expect(minWindowSort([4, 3, 2, 1])).toEqual(4);
});
