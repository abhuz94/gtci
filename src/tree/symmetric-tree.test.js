import TreeNode from '../ds/TreeNode';
import symmetricTree from './symmetric-tree';

test('Symmetric Tree', () => {
  const root = new TreeNode(
    1,
    new TreeNode(2, new TreeNode(3), new TreeNode(4)),
    new TreeNode(2, new TreeNode(4), new TreeNode(3)),
  );

  expect(symmetricTree(root)).toBeTruthy();
});
