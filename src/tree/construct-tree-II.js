// TC - O(N) SC - O(1)

import TreeNode from '../ds/TreeNode';

export default function constructTree(inorder = [], postorder = []) {
  const inorderMap = new Map();

  for (let i = 0; i < inorder.length; i += 1) { inorderMap.set(inorder[i], i); }

  const constructTreeHelper = (
    postStart = 0,
    postEnd = postorder.length - 1,
    inStart = 0,
    inEnd = inorder.length - 1,
  ) => {
    if (postEnd < 0 || inStart > inEnd) { return null; }

    const root = new TreeNode(postorder[postEnd]);
    const inRootIndex = inorderMap.get(postorder[postEnd]);
    const rightChildrenCount = inEnd - (inRootIndex + 1) + 1;

    root.left = constructTreeHelper(
      postStart,
      postEnd - rightChildrenCount - 1,
      inStart,
      inRootIndex - 1,
    );
    root.right = constructTreeHelper(
      postEnd - rightChildrenCount,
      postEnd - 1,
      inRootIndex + 1,
      inEnd,
    );

    return root;
  };

  return constructTreeHelper();
}
