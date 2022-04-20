// TC - O(N) + O(N) + O(k) SC - O(N)

export default function nodesAtKDistance(initialRoot = null, target = 0, k = 0) {
  const attachParentPointers = (root = initialRoot, parent = null) => {
    if (root === null) { return; }
    attachParentPointers(root.left, root);
    attachParentPointers(root.right, root);

    root.parent = parent;
  };
  const find = (root = initialRoot) => {
    if (root === null) { return null; }
    if (root.val === target) { return root; }

    const leftNode = find(root.left);

    if (leftNode !== null) { return leftNode; }

    return find(root.right);
  };
  const getNodesAtDistanceFromTarget = (node = null) => {
    if (node === null) { return []; }

    const queue = [node];
    const visited = new Set();
    let currDistance = 0;

    while (currDistance < k && queue.length) {
      const len = queue.length;

      for (let i = 0; i < len; i += 1) {
        const currNode = queue.shift();

        visited.add(currNode);

        if (currNode.parent && !visited.has(currNode.parent)) { queue.push(currNode.parent); }
        if (currNode.left && !visited.has(currNode.left)) { queue.push(currNode.left); }
        if (currNode.right && !visited.has(currNode.right)) { queue.push(currNode.right); }
      }

      currDistance += 1;
    }

    return queue;
  };

  attachParentPointers();

  const targetNode = find();

  return getNodesAtDistanceFromTarget(targetNode).map((node) => node.val);
}
