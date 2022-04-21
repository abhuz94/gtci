export default function houseRobberIII(initialRoot = null) {
  const houseRobberIIIHelper = (root = initialRoot) => {
    if (root === null) { return [0, 0]; }

    const leftPair = houseRobberIIIHelper(root.left);
    const rightPair = houseRobberIIIHelper(root.right);
    const withRoot = root.val + leftPair[1] + rightPair[1];
    const withoutRoot = Math.max(...leftPair) + Math.max(...rightPair);

    return [withRoot, withoutRoot];
  };

  return Math.max(...houseRobberIIIHelper());
}
