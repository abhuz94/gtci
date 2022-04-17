// TC - O(N) SC - O(1)

export default function hasPathSum(initialRoot = null, targetSum = 0) {
  const isLeaf = (node) => node && (node.left === null && node.right === null);
  const hasPathSumHelper = (root = initialRoot, sum = targetSum) => {
    if (root === null) { return false; }
    if (isLeaf(root)) { return sum - root.val === 0; }

    return hasPathSumHelper(root.left, sum - root.val)
        || hasPathSumHelper(root.right, sum - root.val);
  };

  return hasPathSumHelper();
}
