import {
  climbingStairs, climbingStairsMemo, climbingStairsTab, climbingStairsOpt,
} from './climbing-stairs';

test('Climbing Stairs', () => {
  expect(climbingStairs(2)).toEqual(2);
  expect(climbingStairsMemo(2)).toEqual(2);
  expect(climbingStairsTab(2)).toEqual(2);
  expect(climbingStairsOpt(2)).toEqual(2);
});
