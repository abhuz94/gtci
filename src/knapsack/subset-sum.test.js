import hasSubsetSumTabOpt from './subset-sum';

test('Subset Sum', () => {
  expect(hasSubsetSumTabOpt([1, 2, 3, 7], 6)).toBeTruthy();
  expect(hasSubsetSumTabOpt([1, 2, 7, 1, 5], 10)).toBeTruthy();
  expect(hasSubsetSumTabOpt([1, 3, 4, 8], 6)).toBeFalsy();
});
