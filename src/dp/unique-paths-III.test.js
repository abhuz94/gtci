import uniquePaths from './unique-paths-III';

test('Unique Paths III', () => {
  expect(uniquePaths([[1, 0, 0, 0], [0, 0, 0, 0], [0, 0, 2, -1]])).toEqual(2);
  expect(uniquePaths([[1, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 2]])).toEqual(4);
  expect(uniquePaths([[0, 1], [2, 0]])).toEqual(0);
});
