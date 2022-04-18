import targetSum from './target-sum';

test('Count of Subset Sum', () => {
  expect(targetSum([1, 1, 2, 3], 1)).toEqual(3);
  expect(targetSum([1, 2, 7, 1], 9)).toEqual(2);
  expect(targetSum([1, 1, 1, 1, 1], 3)).toEqual(5);
  expect(targetSum([0, 0, 0, 0, 0, 0, 0, 0, 1], 1)).toEqual(256);
});
