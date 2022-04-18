import subsetSumCount from './subset-sum-count';

test('Count of Subset Sum', () => {
  expect(subsetSumCount([1, 1, 2, 3], 4)).toEqual(3);
  expect(subsetSumCount([1, 2, 7, 1, 5], 9)).toEqual(3);
  expect(subsetSumCount([1, 1, 1, 1], 1)).toEqual(4);
});
