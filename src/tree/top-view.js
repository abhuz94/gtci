// TC - O(N) SC - O(W)

export default function topView(root = null) {
  const map = new Map();
  const queue = [[root, 0]];

  while (queue.length) {
    const len = queue.length;

    for (let i = 0; i < len; i += 1) {
      const [node, level] = queue.shift();

      if (node.left) { queue.push([node.left, level - 1]); }
      if (node.right) { queue.push([node.right, level + 1]); }

      if (!map.has(level)) { map.set(level, node.val); }
    }
  }

  return Array.from(map).sort(([a], [b]) => a - b).map(([, val]) => val);
}
