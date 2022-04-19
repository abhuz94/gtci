import TreeNode from '../ds/TreeNode';
import lca from './lca';

test('Lowest Common Ancestor of a Binary Tree', () => {
  const root = new TreeNode(
    3,
    new TreeNode(
      5,
      new TreeNode(6),
      new TreeNode(2, new TreeNode(7), new TreeNode(4)),
    ),
    new TreeNode(1, new TreeNode(0), new TreeNode(8)),
  );

  expect(lca(root, 4, 5)).toEqual(3);
});
