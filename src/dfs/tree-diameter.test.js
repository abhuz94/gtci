import TreeNode from '../ds/TreeNode';
import treeDiameter from './tree-diameter';

test('Tree Diameter', () => {
  const root = new TreeNode(
    1,
    new TreeNode(2),
    new TreeNode(
      3,
      new TreeNode(5, new TreeNode(7), new TreeNode(8, new TreeNode(10))),
      new TreeNode(6, new TreeNode(9, new TreeNode(10))),
    ),
  );

  expect(treeDiameter(root)).toEqual(7);
});
