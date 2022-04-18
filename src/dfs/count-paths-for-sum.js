// TC - O(N) SC - O(1)

export default function countPathsForSum(initialRoot = null, targetSum = 0) {
  const countPathsForSumHelper = (root = initialRoot, path = []) => {
    if (root === null) { return 0; }

    path.push(root.val);

    let count = 0;
    let sum = 0;

    for (let i = path.length - 1; i >= 0; i -= 1) {
      sum += path[i];

      if (sum === targetSum) { count += 1; }
    }

    count += countPathsForSumHelper(root.left, path);
    count += countPathsForSumHelper(root.right, path);

    path.pop();

    return count;
  };

  return countPathsForSumHelper();
}
