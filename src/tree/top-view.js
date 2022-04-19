// TC - O(N) SC - O(W)

export default function topView(initialRoot = null) {
  const map = new Map();
  const topViewHelper = (root = initialRoot, level = 0) => {
    if (root === null) { return; }

    if (!map.has(level)) { map.set(level, root.val); }

    topViewHelper(root.left, level - 1);
    topViewHelper(root.right, level + 1);
  };

  topViewHelper();

  return Array.from(map).sort(([a], [b]) => a - b).map(([, val]) => val);
}
