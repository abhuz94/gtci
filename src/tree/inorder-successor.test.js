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

  const { predecessor, successor } = inorderSuccessor(root, 8);

  expect(successor.val).toEqual(10);
  expect(predecessor.val).toEqual(4);
});
