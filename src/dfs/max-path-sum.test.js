import TreeNode from '../ds/TreeNode';
import maxPathSum from './max-path-sum';

test('Path with Maximum Sum', () => {
  const root = new TreeNode(
    -10,
    new TreeNode(9),
    new TreeNode(20, new TreeNode(15), new TreeNode(7)),
  );

  expect(maxPathSum(root)).toEqual(42);
});
