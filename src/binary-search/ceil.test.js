import ceil from './ceil';

test('Ceiling of a Number', () => {
  expect(ceil([4, 6, 10], 6)).toEqual(6);
  expect(ceil([1, 3, 8, 10, 15], 12)).toEqual(15);
  expect(ceil([4, 6, 10], 17)).toEqual(-1);
  expect(ceil([4, 6, 10], -1)).toEqual(4);
});
