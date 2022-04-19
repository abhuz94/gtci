// TC - O(N) SC - O(1)

export default function balancedTree(initialRoot = null) {
  const balancedTreeHelper = (root = initialRoot) => {
    if (root === null) { return 0; }

    const leftHeight = balancedTreeHelper(root.left);

    if (leftHeight === -1) { return -1; }

    const rightHeight = balancedTreeHelper(root.right);

    if (rightHeight === -1) { return -1; }

    if (Math.abs(leftHeight - rightHeight) > 1) { return -1; }

    return 1 + Math.max(leftHeight, rightHeight);
  };

  return balancedTreeHelper() !== -1;
}
