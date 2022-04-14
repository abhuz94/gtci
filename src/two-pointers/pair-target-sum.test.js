import pairTargetSum from './pair-target-sum';

test('Pair with Target Sum', () => {
  expect(pairTargetSum([1, 2, 3, 4, 6], 6)).toEqual([1, 3]);
  expect(pairTargetSum([2, 5, 9, 11], 11)).toEqual([0, 2]);
});
