import { minPathSum, minPathSumTab } from './min-path-sum';

test('Minimum Path Sum', () => {
  expect(minPathSum([[1, 3, 1], [1, 5, 1], [4, 2, 1]])).toEqual(7);
  expect(minPathSum([[1, 2, 3], [4, 5, 6]])).toEqual(12);

  expect(minPathSumTab([[1, 3, 1], [1, 5, 1], [4, 2, 1]])).toEqual(7);
  expect(minPathSumTab([[1, 2, 3], [4, 5, 6]])).toEqual(12);
});
