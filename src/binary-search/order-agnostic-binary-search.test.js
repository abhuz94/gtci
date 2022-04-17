import orderAgnosticBinarySearch from './order-agnostic-binary-search';

test('Order-agnostic Binary Search', () => {
  expect(orderAgnosticBinarySearch([4, 6, 10], 10)).toEqual(2);
  expect(orderAgnosticBinarySearch([1, 2, 3, 4, 5, 6, 7], 5)).toEqual(4);
  expect(orderAgnosticBinarySearch([10, 6, 4], 10)).toEqual(0);
  expect(orderAgnosticBinarySearch([10, 6, 4], 4)).toEqual(2);
});
