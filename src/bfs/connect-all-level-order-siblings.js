// TC - O(N) SC - O(N)

export default function connectAllLevelOrderSiblings(root = null) {
  if (root === null) { return root; }

  const queue = [root];

  while (queue.length) {
    const len = queue.length;
    let prev = null;

    for (let i = 0; i < len; i += 1) {
      const curr = queue.shift();

      if (curr.left) { queue.push(curr.left); }
      if (curr.right) { queue.push(curr.right); }
      if (prev) { prev.next = curr; }

      prev = curr;
    }
  }

  return root;
}
