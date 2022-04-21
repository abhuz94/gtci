import combinationSum from './combination-sum-II';

test('Combination Sum', () => {
  expect(combinationSum([10, 1, 2, 7, 6, 1, 5], 8)
    .map((a) => a.sort()).sort()).toEqual([
    [1, 1, 6],
    [1, 2, 5],
    [1, 7],
    [2, 6],
  ].sort());
  expect(combinationSum([2, 5, 2, 1, 2], 5)
    .map((a) => a.sort()).sort()).toEqual([[1, 2, 2], [5]].sort());
});
