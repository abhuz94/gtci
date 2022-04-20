import TreeNode from '../ds/TreeNode';
import insertIntoBST from './insert-into-bst';

test('Insert into a Binary Search Tree', () => {
  const root = new TreeNode(
    4,
    new TreeNode(2, new TreeNode(1), new TreeNode(3)),
    new TreeNode(7),
  );

  expect(insertIntoBST(root, 5).toArray()).toEqual([1, 2, 3, 4, 5, 7]);
});
