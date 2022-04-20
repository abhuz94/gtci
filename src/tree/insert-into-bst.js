// TC - O(logN) SC - O(1)

import TreeNode from '../ds/TreeNode';

export default function insertIntoBST(initialRoot = null, val = 0) {
  const insertIntoBSTHelper = (root = initialRoot) => {
    if (root === null) { return new TreeNode(val); }
    if (val < root.val) {
      root.left = insertIntoBSTHelper(root.left);
    } else {
      root.right = insertIntoBSTHelper(root.right);
    }

    return root;
  };

  return insertIntoBSTHelper();
}
