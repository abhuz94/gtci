import TreeNode from '../ds/TreeNode';
import inorderSuccessor from './inorder-successor';

test('Inorder Successor in Binary Search Tree', () => {
  const root = new TreeNode(
    20,
    new TreeNode(
      8,
      new TreeNode(4),
      new TreeNode(12, new TreeNode(10), new TreeNode(14)),
    ),
    new TreeNode(22),
  );

  expect(inorderSuccessor(root, 14).val).toEqual(20);
});
