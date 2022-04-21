import TreeNode from '../ds/TreeNode';
import countNodes from './count-nodes';

test('Count Complete Tree Nodes', () => {
  const root = new TreeNode(
    1,
    new TreeNode(2, new TreeNode(4), new TreeNode(5)),
    new TreeNode(3, new TreeNode(6)),
  );

  expect(countNodes(root)).toEqual(6);
});
