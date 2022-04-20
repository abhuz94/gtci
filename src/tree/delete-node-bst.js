// TC - O(logN) SC - O(1)

const isLeaf = (node) => node && (node.left === null && node.right === null);
const findMin = (node) => {
  if (node === null) { return null; }
  if (node.left === null) { return node; }

  return findMin(node.left);
};

export default function deleteNodeBST(initialRoot = null, val = 0) {
  const deleteNodeBSTHelper = (root = initialRoot) => {
    if (root === null) { return null; }
    if (root.val === val || root === val) {
      if (isLeaf(root)) { return null; }
      if (root.left === null) { return root.right; }
      if (root.right === null) { return root.left; }

      const leftMostNode = findMin(root.right);
      leftMostNode.left = root.left;

      return root.right;
    }

    if (val < root.val) {
      root.left = deleteNodeBSTHelper(root.left);
    } else {
      root.right = deleteNodeBSTHelper(root.right);
    }

    return root;
  };

  return deleteNodeBSTHelper();
}
