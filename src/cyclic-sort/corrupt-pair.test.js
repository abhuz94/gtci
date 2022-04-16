import corruptPair from './corrupt-pair';

test('Find the Corrupt Pair', () => {
  expect(corruptPair([3, 1, 2, 5, 2])).toEqual([2, 4]);
  expect(corruptPair([3, 1, 2, 3, 6, 4])).toEqual([3, 5]);
});
