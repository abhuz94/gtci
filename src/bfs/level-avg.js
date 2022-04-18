// TC - O(N) SC - O(N)

export default function levelAvg(root = null) {
  if (root === null) { return []; }

  const queue = [root];
  const levelAvgs = [];

  while (queue.length) {
    const len = queue.length;
    let sum = 0.0;

    for (let i = 0; i < len; i += 1) {
      const currNode = queue.shift();

      if (currNode.left) { queue.push(currNode.left); }
      if (currNode.right) { queue.push(currNode.right); }

      sum += currNode.val;
    }

    levelAvgs.push(sum / len);
  }

  return levelAvgs;
}
