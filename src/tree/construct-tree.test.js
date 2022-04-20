import TreeNode from '../ds/TreeNode';
import constructTree from './construct-tree';

test('Construct Binary Tree from Preorder and Inorder Traversal', () => {
  const root = new TreeNode(
    3,
    new TreeNode(9),
    new TreeNode(20, new TreeNode(15), new TreeNode(7)),
  );

  expect(constructTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7])).toEqual(root);
  expect(constructTree([1, 2], [1, 2])).toEqual(new TreeNode(1, null, new TreeNode(2)));
});
