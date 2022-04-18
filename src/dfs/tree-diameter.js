// TC - O(N) SC - O(1)

export default function treeDiameter(initialRoot = null) {
  let max = 0;
  const treeDiameterHelper = (root = initialRoot) => {
    if (root === null) { return 0; }

    const leftHeight = treeDiameterHelper(root.left);
    const rightHeight = treeDiameterHelper(root.right);

    max = Math.max(max, 1 + leftHeight + rightHeight);

    return 1 + Math.max(leftHeight, rightHeight);
  };

  treeDiameterHelper();

  return max;
}
