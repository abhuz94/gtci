// TC - O(N) SC - O(N)

export default function postorder(root = null) {
  const stack = [root];
  const res = [];

  while (stack.length) {
    const len = stack.length;

    for (let i = 0; i < len; i += 1) {
      const currNode = stack.pop();

      res.push(currNode.val);

      if (currNode.left) { stack.push(currNode.left); }
      if (currNode.right) { stack.push(currNode.right); }
    }
  }

  return res.reverse();
}
