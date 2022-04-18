import TreeNode from '../ds/TreeNode';
import minDepth from './min-depth';

test('Minimum Depth of a Binary Tree', () => {
  const root = new TreeNode(
    3,
    new TreeNode(9),
    new TreeNode(20, new TreeNode(15), new TreeNode(7)),
  );

  expect(minDepth(root)).toEqual(2);
});
