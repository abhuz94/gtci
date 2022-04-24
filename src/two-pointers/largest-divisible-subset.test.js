import largestDivisibleSubset from './largest-divisible-subset';

test('Largest Divisible Subset', () => {
  expect(largestDivisibleSubset([1, 2, 3]).sort()).toEqual([1, 2]);
  expect(largestDivisibleSubset([1, 2, 4, 8]).sort()).toEqual([1, 2, 4, 8]);
  expect(largestDivisibleSubset([2, 3, 4, 9, 8]).sort()).toEqual([2, 4, 8]);
});
