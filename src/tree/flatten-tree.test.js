import TreeNode from '../ds/TreeNode';
import flattenTree from './flatten-tree';

test('Flatten Binary Tree to Linked List', () => {
  const root = new TreeNode(
    1,
    new TreeNode(2, new TreeNode(3, new TreeNode(4))),
    new TreeNode(5, null, new TreeNode(6)),
  );

  flattenTree(root);

  const nodes = [];

  let curr = root;

  while (curr) {
    nodes.push(curr.val);

    curr = curr.right;
  }

  expect(nodes).toEqual([1, 2, 3, 4, 5, 6]);
});
