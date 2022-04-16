// TC - O(N) SC - O(N)

export default function zigzagTraversal(root = null) {
  if (root === null) { return []; }

  const queue = [root];
  const levelNodes = [];
  let isZig = true;

  while (queue.length) {
    const len = queue.length;
    const currLevelNodes = [];

    for (let i = 0; i < len; i += 1) {
      const curr = queue.shift();

      if (curr.left) { queue.push(curr.left); }
      if (curr.right) { queue.push(curr.right); }

      if (isZig) { currLevelNodes.push(curr.val); } else { currLevelNodes.unshift(curr.val); }
    }

    levelNodes.push(currLevelNodes);

    isZig = !isZig;
  }

  return levelNodes;
}
