// TC - O(N) SC - O(N)

export default function reverseLevelOrder(root = null) {
  if (root === null) { return []; }

  const queue = [root];
  const reverseLevelOrderNodes = [];

  while (queue.length) {
    const len = queue.length;
    const currLevelNodes = [];

    for (let i = 0; i < len; i += 1) {
      const currNode = queue.shift();

      if (currNode.left) { queue.push(currNode.left); }
      if (currNode.right) { queue.push(currNode.right); }

      currLevelNodes.push(currNode.val);
    }

    reverseLevelOrderNodes.unshift(currLevelNodes);
  }

  return reverseLevelOrderNodes;
}
