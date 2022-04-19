import TreeNode from '../ds/TreeNode';
import preorder from './preorder';

test('Binary Tree Preorder Traversal', () => {
  const root = new TreeNode(
    1,
    new TreeNode(2, null, new TreeNode(3)),
  );
  expect(preorder(root)).toEqual([1, 2, 3]);
});
