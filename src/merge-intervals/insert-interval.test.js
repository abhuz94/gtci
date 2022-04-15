import insertInterval from './insert-interval';

test('Insert Interval', () => {
  expect(insertInterval([[1, 3], [5, 7], [8, 12]], [4, 6])).toEqual([[1, 3], [4, 7], [8, 12]]);
  expect(insertInterval([[1, 3], [5, 7], [8, 12]], [4, 10])).toEqual([[1, 3], [4, 12]]);
  expect(insertInterval([[2, 3], [5, 7]], [1, 4])).toEqual([[1, 4], [5, 7]]);
});
