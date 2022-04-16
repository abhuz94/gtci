import cyclicSort from './cyclic-sort';

test('Cyclic Sort', () => {
  expect(cyclicSort([3, 1, 5, 4, 2])).toEqual([1, 2, 3, 4, 5]);
  expect(cyclicSort([2, 6, 4, 3, 1, 5])).toEqual([1, 2, 3, 4, 5, 6]);
  expect(cyclicSort([1, 5, 6, 4, 3, 2])).toEqual([1, 2, 3, 4, 5, 6]);
});
