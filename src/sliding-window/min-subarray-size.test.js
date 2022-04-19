import minSubarraySize from './min-subarray-size';

test('Minimum Size Subarray Sum', () => {
  expect(minSubarraySize([2, 3, 1, 2, 4, 3], 7)).toEqual(2);
  expect(minSubarraySize([1, 1, 1, 1, 1, 1, 1, 1], 11)).toEqual(0);
  expect(minSubarraySize([1, 4, 4], 4)).toEqual(1);
});
