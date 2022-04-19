// TC - O(N) SC - O(1)

export default function symmetricTree(initialRoot = null) {
  if (initialRoot === null) { return false; }

  const symmetricTreeHelper = (p = null, q = null) => {
    if (p === null) { return q === null; }
    if (q === null) { return p === null; }

    return p.val !== q.val
      ? false
      : symmetricTreeHelper(p.left, q.right) && symmetricTreeHelper(p.right, q.left);
  };

  return symmetricTreeHelper(initialRoot.left, initialRoot.right);
}
