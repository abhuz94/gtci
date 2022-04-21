import { lisubstring, lisubstringMemo, lisubstringTab } from './lisubstring';

test('Maximum Length of Repeated Subarray', () => {
  expect(lisubstring([1, 2, 3, 2, 1], [3, 2, 1, 4, 7])).toEqual(3);
  expect(lisubstring([1, 2, 3, 2, 1], [1, 2, 3, 2, 1])).toEqual(5);
  expect(lisubstring([0, 1, 1, 1, 1], [1, 0, 1, 0, 1])).toEqual(2);
  expect(lisubstring([0, 0, 0, 0, 0, 0, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 0, 0])).toEqual(9);

  expect(lisubstringMemo([1, 2, 3, 2, 1], [3, 2, 1, 4, 7])).toEqual(3);
  expect(lisubstringMemo([1, 2, 3, 2, 1], [1, 2, 3, 2, 1])).toEqual(5);
  expect(lisubstringMemo([0, 1, 1, 1, 1], [1, 0, 1, 0, 1])).toEqual(2);
  expect(lisubstringMemo([5, 14, 53, 80, 48], [50, 47, 3, 80, 83])).toEqual(1);

  expect(lisubstringTab([1, 2, 3, 2, 1], [3, 2, 1, 4, 7])).toEqual(3);
  expect(lisubstringTab([1, 2, 3, 2, 1], [1, 2, 3, 2, 1])).toEqual(5);
  expect(lisubstringTab([0, 1, 1, 1, 1], [1, 0, 1, 0, 1])).toEqual(2);
  expect(lisubstringTab([5, 14, 53, 80, 48], [50, 47, 3, 80, 83])).toEqual(1);
});
