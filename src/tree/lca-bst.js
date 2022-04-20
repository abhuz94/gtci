// TC - O(N) SC - O(1)

export default function lcsBST(initialRoot = null, p = 0, q = 0) {
  const lcsBSTHelper = (root = initialRoot) => {
    if (root === null) { return null; }

    if ((p <= root.val && q >= root.val) || (q <= root.val && p >= root.val)) { return root.val; }

    return p < root.val ? lcsBSTHelper(root.left) : lcsBSTHelper(root.right);
  };

  return lcsBSTHelper();
}
