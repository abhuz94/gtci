// TC - O(logN) SC - O(1)

export default function searchBST(initialRoot = null, target = -999) {
  const searchBSTHelper = (root = initialRoot) => {
    if (root === null) { return null; }
    if (root.val === target) { return root; }
    if (target < root.val) { return searchBSTHelper(root.left); }

    return searchBSTHelper(root.right);
  };

  return searchBSTHelper();
}
