import TreeNode from '../ds/TreeNode';
import inorder from './inorder';

test('Binary Tree Inorder Traversal', () => {
  const root = new TreeNode(
    1,
    null,
    new TreeNode(2, null, new TreeNode(3)),
  );

  expect(inorder(root)).toEqual([1, 2, 3]);
});
