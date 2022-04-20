import TreeNode from '../ds/TreeNode';
import deleteNodeBST from './delete-node-bst';

test('Delete Node in a BST', () => {
  const root = new TreeNode(
    5,
    new TreeNode(3, new TreeNode(2), new TreeNode(4, null, new TreeNode(4.5))),
    new TreeNode(6, null, new TreeNode(7)),
  );

  expect(deleteNodeBST(root, 3).toArray()).toEqual([2, 4, 4.5, 5, 6, 7]);
});
