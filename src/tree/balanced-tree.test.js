import TreeNode from '../ds/TreeNode';
import balancedTree from './balanced-tree';

test('Balanced Binary Tree', () => {
  const root = new TreeNode(
    3,
    new TreeNode(9),
    new TreeNode(20, new TreeNode(15), new TreeNode(7)),
  );

  expect(balancedTree(root)).toBeTruthy();
});
