import TreeNode from '../ds/TreeNode';
import sumNumbers from './sum-numbers';

test('Sum of Path Numbers', () => {
  const root = new TreeNode(1, new TreeNode(2), new TreeNode(3));

  expect(sumNumbers(root)).toEqual(25);
});
