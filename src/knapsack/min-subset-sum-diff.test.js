import minSubsetSumDiff from './min-subset-sum-diff';

test('Minimum Subset Sum Difference', () => {
  expect(minSubsetSumDiff([3, 9, 7, 3])).toEqual(2);
  expect(minSubsetSumDiff([1, 2, 3, 9])).toEqual(3);
  expect(minSubsetSumDiff([1, 2, 7, 1, 5])).toEqual(0);
  expect(minSubsetSumDiff([1, 3, 100, 4])).toEqual(92);
  expect(minSubsetSumDiff([10, 20, 15, 5, 25])).toEqual(5);
});
