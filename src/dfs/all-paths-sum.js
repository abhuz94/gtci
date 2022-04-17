// TC - O(N) SC - O(N)
// for balanced trees TC - (NlogN) SC - O(N)

export default function allPathsSum(initialRoot = null, targetSum = 0) {
  const paths = [];
  const isLeaf = (node = null) => node && (node.left === null && node.right === null);
  const allPathsSumHelper = (root = initialRoot, path = [], sum = targetSum) => {
    if (root === null) { return; }
    if (isLeaf(root)) {
      if (sum - root.val === 0) { paths.push([...path, root.val]); }

      return;
    }

    path.push(root.val);
    allPathsSumHelper(root.left, path, sum - root.val);
    allPathsSumHelper(root.right, path, sum - root.val);
    path.pop();
  };

  allPathsSumHelper();

  return paths;
}
