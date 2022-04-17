import maxConsecutiveOnes from './max-consecutive-ones';

test('Max Consecutive Ones III', () => {
  expect(maxConsecutiveOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2)).toEqual(6);
  expect(maxConsecutiveOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3))
    .toEqual(10);
});
