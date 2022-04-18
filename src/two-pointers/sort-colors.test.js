import sortColors from './sort-colors';

test('Sort Colors', () => {
  expect(sortColors([2, 0, 2, 1, 1, 0])).toEqual([0, 0, 1, 1, 2, 2]);
});
