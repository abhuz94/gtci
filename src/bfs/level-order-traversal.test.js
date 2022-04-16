import TreeNode from '../ds/TreeNode';
import LevelOrderTraversal from './level-order-traversal';

test('Binary Tree Level Order Traversal', () => {
  const root = new TreeNode(
    1,
    new TreeNode(2, new TreeNode(4), new TreeNode(5)),
    new TreeNode(3, new TreeNode(6), new TreeNode(7)),
  );

  expect(LevelOrderTraversal(root)).toEqual([
    [1],
    [2, 3],
    [4, 5, 6, 7],
  ]);
});
