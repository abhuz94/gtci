import TreeNode from '../ds/TreeNode';
import verticalOrder from './vertical-order';

test('Vertical Order Traversal of a Binary Tree', () => {
  const root = new TreeNode(
    1,
    new TreeNode(2, new TreeNode(4), new TreeNode(5)),
    new TreeNode(3, new TreeNode(6), new TreeNode(7)),
  );

  expect(verticalOrder(root)).toEqual(([[4], [2], [1, 5, 6], [3], [7]]));
});
