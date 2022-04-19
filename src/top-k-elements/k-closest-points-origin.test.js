import kthClosestPointsOrigin from './k-closest-points-origin';

test('K Closest Points to Origin', () => {
  expect(kthClosestPointsOrigin([[1, 3], [-2, 2]], 1)).toEqual([[-2, 2]]);
  expect(kthClosestPointsOrigin([[3, 3], [5, -1], [-2, 4]], 2).sort())
    .toEqual([[3, 3], [-2, 4]].sort());
});
