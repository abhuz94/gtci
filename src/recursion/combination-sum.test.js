import combinationSum from './combination-sum';

test('Combination Sum', () => {
  expect(combinationSum([2, 3, 6, 7], 7)
    .map((a) => a.sort()).sort()).toEqual([[2, 2, 3], [7]].sort());
  expect(combinationSum([2, 3, 5, 7], 8)
    .map((a) => a.sort()).sort()).toEqual([[2, 2, 2, 2], [2, 3, 3], [3, 5]].sort());
  expect(combinationSum([2], 1)).toEqual([]);
});
