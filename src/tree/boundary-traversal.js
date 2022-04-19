// TC - O(N) SC - O(1)

export default function boundaryTraversal(initialRoot = null) {
  const boundaryNodes = [initialRoot.val];

  const isLeaf = (node) => node && (node.left === null && node.right === null);

  if (isLeaf(initialRoot)) { return boundaryNodes; }

  const leftBoundary = (root = initialRoot) => {
    if (isLeaf(root) || root === null) { return; }

    boundaryNodes.push(root.val);

    leftBoundary(root.left === null ? root.right : root.left);
  };
  const rightBoundary = (root = initialRoot) => {
    if (isLeaf(root) || root === null) { return; }

    rightBoundary(root.right === null ? root.left : root.right);

    boundaryNodes.push(root.val);
  };
  const leaves = (root = initialRoot) => {
    if (root === null) { return; }
    if (isLeaf(root)) { boundaryNodes.push(root.val); return; }

    leaves(root.left);
    leaves(root.right);
  };

  leftBoundary(initialRoot.left);
  leaves();
  rightBoundary(initialRoot.right);

  return boundaryNodes;
}
