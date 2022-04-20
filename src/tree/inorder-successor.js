// TC - O(H) SC - O(1)

export default function inorderSuccessor(initialRoot = null, key = 0) {
  let successor = null;
  let predecessor = null;
  const inorderSuccessorHelper = (root = initialRoot) => {
    if (root === null) { return; }
    if (key === root.val) {
      inorderSuccessorHelper(root.right);
      inorderSuccessorHelper(root.left);

      return;
    }
    if (key < root.val) {
      successor = root;

      inorderSuccessorHelper(root.left);
    } else {
      predecessor = root;

      inorderSuccessorHelper(root.right);
    }
  };

  inorderSuccessorHelper();

  return { successor, predecessor };
}
