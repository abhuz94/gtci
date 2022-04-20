// TC - O(H) SC - O(1)

export default function inorderSuccessor(initialRoot = null, key = 0) {
  let successor = null;
  const inorderSuccessorHelper = (root = initialRoot) => {
    if (root === null) { return null; }
    if (key === root.val) { return inorderSuccessorHelper(root.right); }
    if (key < root.val) {
      successor = root;

      return inorderSuccessorHelper(root.left);
    }

    return inorderSuccessorHelper(root.right);
  };

  inorderSuccessorHelper();

  return successor;
}
