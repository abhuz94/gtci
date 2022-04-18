// TC - O(N) SC - O(1)

const isLeaf = (node) => node && (node.left === null && node.right === null);

export default function sumNumbers(initialRoot = null) {
  const sumNumbersHelper = (root = initialRoot, sum = 0) => {
    if (isLeaf(root)) { return root.val + sum * 10; }
    if (root === null) { return 0; }

    return sumNumbersHelper(root.left, root.val + sum * 10)
        + sumNumbersHelper(root.right, root.val + sum * 10);
  };

  return sumNumbersHelper();
}
