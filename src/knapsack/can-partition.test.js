import canPartition from './can-partition';

test('Partition Equal Subset Sum', () => {
  expect(canPartition([1, 5, 11, 5])).toBeTruthy();
  expect(canPartition([1, 2, 3, 5])).toBeFalsy();
});
