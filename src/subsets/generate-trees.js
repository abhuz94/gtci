// TC - O(N * 2^N) SC - O(2^N)

import TreeNode from '../ds/TreeNode';

/* eslint-disable no-restricted-syntax */
export default function generateTrees(num = 0) {
  const generateTreesHelper = (low = 1, high = num) => {
    if (low > high) { return [null]; }

    const trees = [];

    for (let i = low; i <= high; i += 1) {
      const leftChildren = generateTreesHelper(low, i - 1);
      const rightChildren = generateTreesHelper(i + 1, high);

      for (const leftChild of leftChildren) {
        for (const rightChild of rightChildren) {
          const root = new TreeNode(i);

          root.left = leftChild;
          root.right = rightChild;

          trees.push(root);
        }
      }
    }

    return trees;
  };

  return generateTreesHelper();
}
