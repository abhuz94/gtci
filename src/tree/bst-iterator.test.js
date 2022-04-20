import TreeNode from '../ds/TreeNode';
import BSTIterator from './bst-iterator';

test('Binary Search Tree Iterator', () => {
  const root = new TreeNode(
    7,
    new TreeNode(3),
    new TreeNode(15, new TreeNode(9), new TreeNode(20)),
  );

  const it = new BSTIterator(root);

  expect(it.next()).toEqual(3);
  expect(it.next()).toEqual(7);
  expect(it.hasNext()).toBeTruthy();
  expect(it.next()).toEqual(9);
  expect(it.hasNext()).toBeTruthy();
  expect(it.next()).toEqual(15);
  expect(it.hasNext()).toBeTruthy();
  expect(it.next()).toEqual(20);
  expect(it.hasNext()).toBeFalsy();
});
