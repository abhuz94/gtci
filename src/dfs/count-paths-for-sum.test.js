import TreeNode from '../ds/TreeNode';
import countPathsForSum from './count-paths-for-sum';

test('Count Paths for a Sum', () => {
  const root = new TreeNode(
    10,
    new TreeNode(
      5,
      new TreeNode(3, new TreeNode(3), new TreeNode(-2)),
      new TreeNode(2, null, new TreeNode(1)),
    ),
    new TreeNode(-3, null, new TreeNode(11)),
  );

  expect(countPathsForSum(root, 8)).toEqual(3);
});
