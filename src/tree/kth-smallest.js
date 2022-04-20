// TC - O(N) SC - O(1)

export default function kthSmallest(initialRoot = null, k = 0) {
  let count = 0;
  const kthSmallestHelper = (root = initialRoot) => {
    if (root === null) { return null; }

    const leftNode = kthSmallestHelper(root.left);

    count += 1;

    if (count === k) { return root; }

    return leftNode !== null ? leftNode : kthSmallestHelper(root.right);
  };

  return kthSmallestHelper();
}
