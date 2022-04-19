// TC - O(N) SC - O(1)

export default function lca(initialRoot, p, q) {
  if (initialRoot === null) { return null; }

  const lcaHelper = (root = initialRoot) => {
    if (root === null) { return null; }
    if (p === root.val || q === root.val) { return root.val; }

    const leftPath = lcaHelper(root.left);
    const rightPath = lcaHelper(root.right);

    if (leftPath !== null && rightPath !== null) { return root.val; }

    return leftPath === null ? rightPath : leftPath;
  };

  return lcaHelper();
}
