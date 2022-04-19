// TC - O(N) SC - O(1)

export default function inorder(root = null) {
  const path = [];
  const stack = [];
  let node = root;

  // eslint-disable-next-line no-constant-condition
  while (1) {
    if (node) {
      stack.push(node);

      node = node.left;
    } else {
      if (!stack.length) { break; }

      node = stack.pop();

      path.push(node.val);

      node = node.right;
    }
  }

  return path;
}
