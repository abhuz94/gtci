// TC - O(N) SC - O(1)

export default function bottomView(root = null) {
  const map = new Map();
  const queue = [[root, 0]];

  while (queue.length) {
    const len = queue.length;

    for (let i = 0; i < len; i += 1) {
      const [currNode, level] = queue.shift();

      if (currNode.left) { queue.push([currNode.left, level - 1]); }
      if (currNode.right) { queue.push([currNode.right, level + 1]); }

      map.set(level, currNode.val);
    }
  }

  return Array.from(map).sort(([a], [b]) => a - b).map(([, val]) => val);
}
