import TreeNode from '../ds/TreeNode';
import validateBST from './validate-bst';

test('Validate Binary Search Tree', () => {
  const root = new TreeNode(
    5,
    new TreeNode(1),
    new TreeNode(4, new TreeNode(3), new TreeNode(6)),
  );

  expect(validateBST(root)).toBeFalsy();
});
