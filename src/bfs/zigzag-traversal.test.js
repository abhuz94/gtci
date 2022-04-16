import TreeNode from '../ds/TreeNode';
import zigzagTraversal from './zigzag-traversal';

test('Zigzag Traversal', () => {
  const root = new TreeNode(
    1,
    new TreeNode(2, new TreeNode(4), new TreeNode(5)),
    new TreeNode(3, new TreeNode(6), new TreeNode(7)),
  );

  expect(zigzagTraversal(root)).toEqual([
    [1],
    [3, 2],
    [4, 5, 6, 7],
  ]);
});
