import TreeNode from '../ds/TreeNode';
import lcsBST from './lca-bst';

test('Lowest Common Ancestor of a Binary Search Tree', () => {
  const root = new TreeNode(
    6,
    new TreeNode(
      2,
      new TreeNode(0),
      new TreeNode(4, new TreeNode(3), new TreeNode(5)),
    ),
    new TreeNode(8, new TreeNode(7), new TreeNode(9)),
  );

  expect(lcsBST(root, 2, 8)).toEqual(6);
});
