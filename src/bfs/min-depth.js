// TC - O(N) SC - O(N)

export default function minDepth(root = null) {
  if (root === null) { return 0; }

  const queue = [root];
  const isLeaf = (node) => node && (node.left === null && node.right === null);
  let depth = 0;

  while (queue.length) {
    const len = queue.length;

    depth += 1;

    for (let i = 0; i < len; i += 1) {
      const currNode = queue.shift();

      if (isLeaf(currNode)) { return depth; }
      if (currNode.left) { queue.push(currNode.left); }
      if (currNode.right) { queue.push(currNode.right); }
    }
  }

  return depth;
}
