import tripletSumZero from './triplet-sum-zero';

test('Triplet Sum to Zero', () => {
  expect(tripletSumZero([-3, 0, 1, 2, -1, 1, -2]))
    .toEqual([[-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]]);
  expect(tripletSumZero([-5, 2, -1, -2, 3]))
    .toEqual([[-5, 2, 3], [-2, -1, 3]]);
  expect(tripletSumZero([-1, 0, 1, 2, -1, -4]))
    .toEqual([[-1, -1, 2], [-1, 0, 1]]);
  expect(tripletSumZero([]))
    .toEqual([]);
  expect(tripletSumZero([0]))
    .toEqual([]);
});
