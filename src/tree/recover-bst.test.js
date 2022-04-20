import TreeNode from '../ds/TreeNode';
import recoverBST from './recover-bst';

test('Recover Binary Search Tree', () => {
  const root = new TreeNode(1, new TreeNode(3, null, new TreeNode(2)));

  expect(root.toArray()).toEqual([3, 2, 1]);
  expect(recoverBST(root).toArray()).toEqual([1, 2, 3]);
});
