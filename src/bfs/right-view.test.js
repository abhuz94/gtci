import TreeNode from '../ds/TreeNode';
import rightView from './right-view';

test('Right View of a Binary Tree', () => {
  const root = new TreeNode(
    1,
    new TreeNode(2, null, new TreeNode(5)),
    new TreeNode(3, null, new TreeNode(4)),
  );

  expect(rightView(root)).toEqual([1, 3, 4]);
});
