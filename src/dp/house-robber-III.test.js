import TreeNode from '../ds/TreeNode';
import houseRobber from './house-robber-III';

test('House Robber III', () => {
  const root = new TreeNode(
    3,
    new TreeNode(2, null, new TreeNode(3)),
    new TreeNode(3, null, new TreeNode(1)),
  );

  expect(houseRobber(root)).toEqual(7);
});
