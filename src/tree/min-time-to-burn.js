// TC - O(N) + O(N) + O(N) SC - O(N)

export default function minTimeToBurn(initialRoot = null, target = 0) {
  const attachParentPointers = (root = initialRoot, parent = null) => {
    if (root === null) { return; }

    attachParentPointers(root.left, root);
    attachParentPointers(root.right, root);

    root.parent = parent;
  };
  const find = (root = initialRoot) => {
    if (root === null) { return null; }
    if (target === root.val) { return root; }

    const leftNode = find(root.left);

    if (leftNode !== null) { return leftNode; }

    return find(root.right);
  };
  const burnTree = (node = null) => {
    if (node === null) { return 0; }

    const queue = [node];
    const visited = new Set([node]);
    let currTime = 0;

    while (queue.length) {
      const len = queue.length;

      for (let i = 0; i < len; i += 1) {
        const currNode = queue.shift();

        visited.add(currNode);

        if (currNode.parent !== null && !visited.has(currNode.parent)) {
          queue.push(currNode.parent);
        }
        if (currNode.left !== null && !visited.has(currNode.left)) {
          queue.push(currNode.left);
        }
        if (currNode.right !== null && !visited.has(currNode.right)) {
          queue.push(currNode.right);
        }
      }

      if (queue.length) { currTime += 1; }
    }

    return currTime;
  };

  attachParentPointers();

  return burnTree(find(target));
}
