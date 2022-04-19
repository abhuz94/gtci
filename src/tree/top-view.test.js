import TreeNode from '../ds/TreeNode';
import topView from './top-view';

test('Top View', () => {
  const root = new TreeNode(
    3,
    new TreeNode(9),
    new TreeNode(20, new TreeNode(15), new TreeNode(7)),
  );

  expect(topView(root)).toEqual([9, 3, 20, 7]);
});
