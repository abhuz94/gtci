import TreeNode from '../ds/TreeNode';
import searchBST from './search-bst';

test('Search in a Binary Search Tree', () => {
  const two = new TreeNode(2, new TreeNode(1), new TreeNode(3));
  const root = new TreeNode(
    4,
    two,
    new TreeNode(7),
  );

  expect(searchBST(root, 2)).toEqual(two);
});
