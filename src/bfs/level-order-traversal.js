// TC - O(N) SC - O(N)

export default function LevelOrderTraversal(root = null) {
  if (root === null) { return []; }

  const queue = [root];
  const levelNodes = [];

  while (queue.length) {
    const len = queue.length;
    const currLevelNodes = [];

    for (let i = 0; i < len; i += 1) {
      const curr = queue.shift();

      if (curr.left) { queue.push(curr.left); }
      if (curr.right) { queue.push(curr.right); }

      currLevelNodes.push(curr.val);
    }

    levelNodes.push(currLevelNodes);
  }

  return levelNodes;
}
