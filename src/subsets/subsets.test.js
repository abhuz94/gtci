import subsets from './subsets';

test('Subsets', () => {
  expect(subsets([1, 3]).sort()).toEqual([[], [1], [3], [1, 3]].sort());
  expect(subsets([1, 5, 3]).sort())
    .toEqual([[], [1], [5], [3], [1, 5], [1, 3], [5, 3], [1, 5, 3]].sort());
});
