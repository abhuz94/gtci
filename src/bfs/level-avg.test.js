import TreeNode from '../ds/TreeNode';
import levelAvg from './level-avg';

test('Average of Levels in Binary Tree', () => {
  const root = new TreeNode(
    3,
    new TreeNode(9),
    new TreeNode(20, new TreeNode(15), new TreeNode(7)),
  );

  expect(levelAvg(root)).toEqual([3.00000, 14.50000, 11.00000]);
});
