import quadTargetSum from './quad-target-sum';

test('Quadruple Sum to Target', () => {
  expect(quadTargetSum([4, 1, 2, -1, 1, -3], 1)).toEqual([[-3, -1, 1, 4], [-3, 1, 1, 2]]);
  expect(quadTargetSum([2, 0, -1, 1, -2, 2], 2)).toEqual([[-2, 0, 2, 2], [-1, 0, 1, 2]]);
  expect(quadTargetSum([2, 2, 2, 2, 2], 8)).toEqual([[2, 2, 2, 2]]);
  expect(quadTargetSum([1, 0, -1, 0, -2, 2], 0))
    .toEqual([[-2, -1, 1, 2], [-2, 0, 0, 2], [-1, 0, 0, 1]]);
});
