// TC - O(N) SC - O(N)

export default function maxPathSum(initialRoot = null) {
  let maxSum = Number.NEGATIVE_INFINITY;
  const maxPathSumHelper = (root = initialRoot) => {
    if (root === null) { return 0; }

    const leftSum = maxPathSumHelper(root.left);
    const rightSum = maxPathSumHelper(root.right);

    maxSum = Math.max(maxSum, root.val + leftSum + rightSum);

    return Math.max(root.val + Math.max(leftSum, rightSum), 0);
  };

  maxPathSumHelper();

  return maxSum;
}
