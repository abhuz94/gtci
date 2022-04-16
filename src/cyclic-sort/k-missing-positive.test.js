import kMissingPositive from './k-missing-positive';

test('Find the First K Missing Positive Numbers', () => {
  expect(kMissingPositive([3, -1, 4, 5, 5], 3)).toEqual([1, 2, 6]);
  expect(kMissingPositive([2, 3, 4], 3)).toEqual([1, 5, 6]);
  expect(kMissingPositive([-2, -3, 4], 2)).toEqual([1, 2]);
  expect(kMissingPositive([-2, -3, -4], 4)).toEqual([1, 2, 3, 4]);
});
