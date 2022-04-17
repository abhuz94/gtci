import subsetsWithDuplicates from './subsets-with-duplicates';

test('Subsets With Duplicates', () => {
  expect(subsetsWithDuplicates([1, 3, 3]).sort())
    .toEqual([[], [1], [3], [1, 3], [3, 3], [1, 3, 3]].sort());
});
