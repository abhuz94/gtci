import fruitsIntoBaskets from './fruits-into-baskets';

test('Fruit Into Baskets', () => {
  expect(fruitsIntoBaskets([1, 2, 1])).toEqual(3);
  expect(fruitsIntoBaskets([0, 1, 2, 2])).toEqual(3);
  expect(fruitsIntoBaskets([1, 2, 3, 2, 2])).toEqual(4);
});
