import TreeNode from '../ds/TreeNode';
import boundaryTraversal from './boundary-traversal';

test('Balanced Binary Tree', () => {
  const root = new TreeNode(
    3,
    null,
    new TreeNode(20, null, new TreeNode(7)),
  );

  expect(boundaryTraversal(root)).toEqual([3, 7, 20]);
});
