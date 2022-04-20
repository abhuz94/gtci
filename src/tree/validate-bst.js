// TC - O(N) SC - O(1)

export default function validateBST(initialRoot = null) {
  const validateBSTHelper = (
    root = initialRoot,
    min = Number.NEGATIVE_INFINITY,
    max = Number.POSITIVE_INFINITY,
  ) => {
    if (root === null) { return true; }
    if (root.val > min && root.val < max) {
      return validateBSTHelper(root.left, min, root.val)
            && validateBSTHelper(root.right, root.val, max);
    }

    return false;
  };

  return validateBSTHelper();
}
