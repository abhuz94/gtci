import TreeNode from '../ds/TreeNode';
import constructTree from './construct-tree-II';

test('Construct Binary Tree from Preorder and Inorder Traversal', () => {
  const root = new TreeNode(
    3,
    new TreeNode(9),
    new TreeNode(20, new TreeNode(15), new TreeNode(7)),
  );

  expect(constructTree([9, 3, 15, 20, 7], [9, 15, 7, 20, 3])).toEqual(root);
  expect(constructTree([-1], [-1])).toEqual(new TreeNode(-1));
});
