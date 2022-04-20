// TC - O(N) SC - O(1)

import TreeNode from '../ds/TreeNode';

export default function constructTree(preorder = [], inorder = []) {
  const inorderMap = new Map();

  for (let i = 0; i < inorder.length; i += 1) { inorderMap.set(inorder[i], i); }

  const constructTreeHelper = (
    preStart = 0,
    preEnd = preorder.length - 1,
    inStart = 0,
    inEnd = inorder.length - 1,
  ) => {
    if (preStart > preEnd || inStart > inEnd) { return null; }

    const root = new TreeNode(preorder[preStart]);
    const inRootIndex = inorderMap.get(preorder[preStart]);
    const leftChildrenCount = inRootIndex - inStart - 1;

    root.left = constructTreeHelper(
      preStart + 1,
      preStart + 1 + leftChildrenCount,
      inStart,
      inRootIndex - 1,
    );
    root.right = constructTreeHelper(
      preStart + 1 + leftChildrenCount + 1,
      preEnd,
      inRootIndex + 1,
      inEnd,
    );

    return root;
  };

  return constructTreeHelper();
}
