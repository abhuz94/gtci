// TC - O(N) + O(NlogN) + O(NlogN) + O(NlogN) SC - O(level)

export default function verticalOrder(initialRoot = null) {
  if (initialRoot === null) { return []; }

  const verticalOrderHelper = (root = null, level = 0, depth = 0, levelBucket = new Map()) => {
    if (root === null) { return levelBucket; }

    verticalOrderHelper(root.left, level - 1, depth + 1, levelBucket);
    const depthBucket = levelBucket.get(level) || new Map();
    const nodes = depthBucket.get(depth) || [];
    nodes.push(root.val);
    nodes.sort((a, b) => a - b);
    depthBucket.set(depth, nodes);
    levelBucket.set(level, depthBucket);
    verticalOrderHelper(root.right, level + 1, depth + 1, levelBucket);

    return levelBucket;
  };

  const verticalOrderedNodes = verticalOrderHelper(initialRoot);

  return Array.from(verticalOrderedNodes)
    .sort(([a], [b]) => a - b)
    .map(([, depthBucket]) => {
      const nodes = [];

      Array.from(depthBucket).sort(([a], [b]) => a - b)
        .forEach(([, node]) => nodes.push(...node));

      return nodes;
    });
}
