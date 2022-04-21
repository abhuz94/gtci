import TreeNode from '../ds/TreeNode';
import twoSum from './two-sum';

test('Two Sum', () => {
  const root = new TreeNode(
    2,
    new TreeNode(1),
    new TreeNode(3),
  );

  expect(twoSum(root, 3)).toBeTruthy();
});
