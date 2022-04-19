// TC - O(N) SC - O(1)

export default function maxDepth(initialRoot = null) {
  const maxDepthHelper = (root = initialRoot) => {
    if (root === null) { return 0; }

    return 1 + Math.max(maxDepthHelper(root.left), maxDepthHelper(root.right));
  };

  return maxDepthHelper();
}
