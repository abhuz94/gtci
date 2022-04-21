import combinationSum from './combination-sum-III';

test('Combination Sum', () => {
  expect(combinationSum(3, 7)).toEqual([[1, 2, 4]]);
  expect(combinationSum(3, 9)).toEqual([[1, 2, 6], [1, 3, 5], [2, 3, 4]]);
  expect(combinationSum(2, 18)).toEqual([]);
});
