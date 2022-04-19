import TreeNode from '../ds/TreeNode';
import maxDepth from './max-depth';

test('Maximum Depth of Binary Tree', () => {
  const root = new TreeNode(
    3,
    new TreeNode(9),
    new TreeNode(20, new TreeNode(15), new TreeNode(7)),
  );

  expect(maxDepth(root)).toEqual(3);
});
