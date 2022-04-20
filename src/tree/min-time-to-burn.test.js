import TreeNode from '../ds/TreeNode';
import minTimeToBurn from './min-time-to-burn';

test('Minimum time to burn a Tree starting from a Leaf node', () => {
  const root = new TreeNode(
    1,
    new TreeNode(
      2,
      new TreeNode(4),
      new TreeNode(5, new TreeNode(7), new TreeNode(8)),
    ),
    new TreeNode(
      3,
      null,
      new TreeNode(6, null, new TreeNode(9, null, new TreeNode(10))),
    ),
  );

  expect(minTimeToBurn(root, 8)).toEqual(7);
});
