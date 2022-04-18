import TreeNode from '../ds/TreeNode';
import reverseLevelOrder from './reverse-level-order';

test('Reverse Level Order Traversal', () => {
  const root = new TreeNode(
    3,
    new TreeNode(9),
    new TreeNode(20, new TreeNode(15), new TreeNode(7)),
  );

  expect(reverseLevelOrder(root)).toEqual([[15, 7], [9, 20], [3]]);
});
