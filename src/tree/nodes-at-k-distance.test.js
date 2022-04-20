import TreeNode from '../ds/TreeNode';
import nodesAtKDistance from './nodes-at-k-distance';

test('All Nodes Distance K in Binary Tree', () => {
  const root = new TreeNode(
    3,
    new TreeNode(
      5,
      new TreeNode(6),
      new TreeNode(2, new TreeNode(7), new TreeNode(4)),
    ),
    new TreeNode(1, new TreeNode(0), new TreeNode(8)),
  );

  expect(nodesAtKDistance(root, 5, 2).sort()).toEqual([7, 4, 1].sort());
});
