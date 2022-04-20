import TreeNode from '../ds/TreeNode';
import getMaxWidth from './max-width';

test('Maximum Depth of Binary Tree', () => {
  const root = new TreeNode(
    3,
    new TreeNode(3, new TreeNode(5), new TreeNode(3)),
    new TreeNode(2, null, new TreeNode(7)),
  );

  expect(getMaxWidth(root)).toEqual(4);
});
