import { uniquePaths, uniquePathsTab } from './unique-paths-II';

test('Unique Paths II', () => {
  expect(uniquePaths([[0, 0, 0], [0, 1, 0], [0, 0, 0]])).toEqual(2);
  expect(uniquePaths([[0, 1], [0, 0]])).toEqual(1);

  expect(uniquePathsTab([[0, 0, 0], [0, 1, 0], [0, 0, 0]])).toEqual(2);
  expect(uniquePathsTab([[0, 1], [0, 0]])).toEqual(1);
  expect(uniquePathsTab([[1]])).toEqual(0);
  expect(uniquePathsTab([[0]])).toEqual(1);
});
