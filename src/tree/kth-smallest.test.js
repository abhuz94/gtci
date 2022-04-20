import TreeNode from '../ds/TreeNode';
import kthSmallest from './kth-smallest';

test('Kth Smallest Element in a BST', () => {
  const root = new TreeNode(
    5,
    new TreeNode(3, new TreeNode(2, new TreeNode(1)), new TreeNode(4)),
    new TreeNode(6),
  );
  const node = kthSmallest(root, 3);

  expect(node ? node.val : node).toEqual(3);
});
