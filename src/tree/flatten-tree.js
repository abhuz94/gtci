// TC - O(N) SC - O(1)

export default function flattenTree(initialRoot = null) {
  let prev = null;
  const flattenTreeHelper = (root = initialRoot) => {
    if (root === null) { return; }

    flattenTreeHelper(root.right);
    flattenTreeHelper(root.left);

    root.right = prev;
    root.left = null;
    prev = root;
  };

  flattenTreeHelper();
}
