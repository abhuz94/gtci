import TreeNode from '../ds/TreeNode';
import postorder from './postorder';

test('postorder', () => {
  const root = new TreeNode(
    3,
    new TreeNode(1),
    new TreeNode(2),
  );

  expect(postorder(root)).toEqual([1, 2, 3]);
});
