import maxSumSubarrayK from './max-sum-subarray-k';

test('Maximum Sum Subarray of Size K', () => {
  expect(maxSumSubarrayK([2, 1, 5, 1, 3, 2], 3)).toEqual(9);
  expect(maxSumSubarrayK([2, 3, 4, 1, 5], 2)).toEqual(7);
});
