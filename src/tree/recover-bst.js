// TC(N) SC - O(N)

export default function recoverBST(initialRoot = null) {
  if (initialRoot === null) { return null; }

  const inorder = (root = initialRoot, path = []) => {
    if (root === null) { return path; }

    inorder(root.left, path);
    path.push(root);
    inorder(root.right, path);

    return path;
  };

  const swap = (m, n) => {
    const temp = m.val;
    m.val = n.val;
    n.val = temp;
  };
  const nodes = inorder();
  let left = null;
  let mid = null;
  let right = null;

  for (let i = 1; i < nodes.length; i += 1) {
    if (nodes[i].val < nodes[i - 1].val) {
      if (left === null) {
        left = nodes[i - 1];
        right = nodes[i];
      } else {
        mid = nodes[i];
      }
    }
  }

  swap(left, mid === null ? right : mid);

  return initialRoot;
}
