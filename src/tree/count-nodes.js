// TC - O(H) SC - O(1)

export default function countNodes(initialRoot = null) {
  const getLeftHeight = (root = initialRoot) => {
    if (root === null) { return 0; }

    let curr = root;
    let height = 0;

    while (curr) {
      curr = curr.left;
      height += 1;
    }

    return height;
  };
  const getRightHeight = (root = initialRoot) => {
    if (root === null) { return 0; }

    let curr = root;
    let height = 0;

    while (curr) {
      curr = curr.right;
      height += 1;
    }

    return height;
  };
  const countNodesHelper = (root = initialRoot) => {
    if (root === null) { return 0; }

    const lh = getLeftHeight(root);
    const rh = getRightHeight(root);

    if (lh === rh) { return (2 ** (lh)) - 1; }

    return 1 + countNodesHelper(root.left) + countNodesHelper(root.right);
  };

  return countNodesHelper();
}
