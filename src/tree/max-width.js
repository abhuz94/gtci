// TC - O(N) SC - O(1)

export default function getMaxWidth(root = null) {
  if (root === null) { return 0; }

  const queue = [[root, 0]];
  let maxWidth = 0;

  while (queue.length) {
    const len = queue.length;
    const min = queue[0][1];
    maxWidth = Math.max(maxWidth, 1 + (queue[queue.length - 1][1] - queue[0][1]));

    for (let j = 0; j < len; j += 1) {
      const [currNode, i] = queue.shift();

      if (currNode.left) { queue.push([currNode.left, 2 * i + 1 - min]); }
      if (currNode.right) { queue.push([currNode.right, 2 * i + 2 - min]); }
    }
  }

  return maxWidth;
}
