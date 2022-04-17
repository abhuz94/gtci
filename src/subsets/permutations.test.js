import permutations from './permutations';

test('Permutations', () => {
  expect(permutations([1, 3, 5]).sort())
    .toEqual([[1, 3, 5], [1, 5, 3], [3, 1, 5], [3, 5, 1], [5, 1, 3], [5, 3, 1]].sort());
});
