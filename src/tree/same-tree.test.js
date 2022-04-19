import TreeNode from '../ds/TreeNode';
import sameTree from './same-tree';

test('Same Tree', () => {
  const root1 = new TreeNode(
    3,
    new TreeNode(9),
    new TreeNode(20, new TreeNode(15), new TreeNode(7)),
  );
  const root2 = new TreeNode(
    3,
    new TreeNode(9),
    new TreeNode(20, new TreeNode(15), new TreeNode(7)),
  );

  expect(sameTree(root1, root2)).toBeTruthy();
});
