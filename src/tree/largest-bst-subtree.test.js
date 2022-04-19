import TreeNode from '../ds/TreeNode';
import largestBSTSubtree from './largest-bst-subtree';

test('Largest BST in a Binary Tree', () => {
  const root = new TreeNode(
    5,
    new TreeNode(2, new TreeNode(1), new TreeNode(3)),
    new TreeNode(4),
  );

  expect(largestBSTSubtree(root)).toEqual(3);
});
