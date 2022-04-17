import TreeNode from '../ds/TreeNode';
import hasPathSum from './has-path-sum';

test('Binary Tree Path Sum', () => {
  const root = new TreeNode(
    5,
    new TreeNode(4, new TreeNode(11, new TreeNode(7), new TreeNode(2))),
    new TreeNode(8, new TreeNode(13), new TreeNode(4, null, new TreeNode(1))),
  );

  expect(hasPathSum(root, 22)).toBeTruthy();
});
