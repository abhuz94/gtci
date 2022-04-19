// TC - O(N) SC - O(N)

export default function preorder(root = null) {
  const path = [];
  const stack = [root];

  while (stack.length) {
    const len = stack.length;

    for (let i = 0; i < len; i += 1) {
      const currNode = stack.pop();

      path.push(currNode.val);

      if (currNode.right) { stack.push(currNode.right); }
      if (currNode.left) { stack.push(currNode.left); }
    }
  }

  return path;
}
