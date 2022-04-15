import hasCycleArray from './has-cycle-array';

test('Cycle in a Circular Array', () => {
  expect(hasCycleArray([1, 2, -1, 2, 2])).toBeTruthy();
  expect(hasCycleArray([2, 2, -1, 2])).toBeTruthy();
  expect(hasCycleArray([2, 1, -1, -2])).toBeFalsy();
  expect(hasCycleArray([4, 1, 1, 1])).toBeFalsy();
  expect(hasCycleArray([2, -1, 1, 2, 2])).toBeTruthy();
  expect(hasCycleArray([-1, 2])).toBeFalsy();
  expect(hasCycleArray([-2, 1, -1, -2, -2])).toBeFalsy();
  expect(hasCycleArray([-8, -1, 1, 7, 2])).toBeFalsy();
  expect(hasCycleArray([-2, -17, -1, -2, -2])).toBeTruthy();
  expect(hasCycleArray([-1, 2, 1, 2])).toBeTruthy();
});
