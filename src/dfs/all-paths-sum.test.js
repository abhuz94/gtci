import TreeNode from '../ds/TreeNode';
import allPathsSum from './all-paths-sum';

test('All Paths for a Sum', () => {
  const root = new TreeNode(
    5,
    new TreeNode(4, new TreeNode(11, new TreeNode(7), new TreeNode(2))),
    new TreeNode(8, new TreeNode(13), new TreeNode(4, new TreeNode(5), new TreeNode(1))),
  );

  expect(allPathsSum(root, 22)).toEqual([[5, 4, 11, 2], [5, 8, 4, 5]]);
});
