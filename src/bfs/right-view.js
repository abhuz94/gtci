// TC - O(N) SC - O(N)

export default function rightView(root = null) {
  if (root === null) { return []; }

  const queue = [root];
  const rightViewNodes = [];

  while (queue.length) {
    const len = queue.length;

    rightViewNodes.push(queue[len - 1].val);

    for (let i = 0; i < len; i += 1) {
      const currNode = queue.shift();

      if (currNode.left) { queue.push(currNode.left); }
      if (currNode.right) { queue.push(currNode.right); }
    }
  }

  return rightViewNodes;
}
