import TreeNode from '../ds/TreeNode';
import connectAllLevelOrderSiblings from './connect-all-level-order-siblings';

TreeNode.next = null;

const getLevelOrderUsingNextPointers = (root = null) => {
  if (root === null) { return []; }

  const levelNodes = [];
  const queue = [root];

  while (queue.length) {
    let curr = queue.shift();
    const currLevelNodes = [];

    if (curr.left) { queue.push(curr.left); } else if (curr.right) { queue.push(curr.right); }

    while (curr) {
      currLevelNodes.push(curr.val);

      curr = curr.next;
    }

    levelNodes.push(currLevelNodes);
  }

  return levelNodes;
};

test('Connect All Level Order Siblings', () => {
  const root = new TreeNode(
    1,
    new TreeNode(2, new TreeNode(4), new TreeNode(5)),
    new TreeNode(3, new TreeNode(6), new TreeNode(7)),
  );

  connectAllLevelOrderSiblings(root);

  expect(getLevelOrderUsingNextPointers(root)).toEqual([
    [1],
    [2, 3],
    [4, 5, 6, 7],
  ]);
});
