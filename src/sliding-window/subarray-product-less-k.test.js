import subarrayProductLessK from './subarray-product-less-k';

test('Subarray Product Less Than K', () => {
  expect(subarrayProductLessK([10, 5, 2, 6], 100)).toEqual(8);
  expect(subarrayProductLessK([1, 2, 3], 0)).toEqual(0);
});
