import maxProductSubArray from './max-product-subarray';

test('Maximum Product Subarray', () => {
  expect(maxProductSubArray([2, 3, -2, 4])).toEqual(6);
  expect(maxProductSubArray([0, 2])).toEqual(2);
  expect(maxProductSubArray([-2, -40, 0, -2, -3])).toEqual(80);
  expect(maxProductSubArray([-1, -3, -10, 0, 60])).toEqual(60);
  expect(maxProductSubArray([6, -3, -10, 0, 2])).toEqual(180);
  expect(maxProductSubArray([-2, 0, -1])).toEqual(0);
});
