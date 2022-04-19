// TC - O(N) SC - O(1)

export default function sameTree(p = null, q = null) {
  const sameTreeHelper = (a = p, b = q) => {
    if (a === null) { return b === null; }
    if (b === null) { return a === null; }

    return a.val !== b.val
      ? false
      : sameTreeHelper(a.left, b.left) && sameTreeHelper(a.right, b.right);
  };

  return sameTreeHelper();
}
