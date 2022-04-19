// TC - O(N) SC - O(1)

export default function largestBSTSubtree(initialRoot = null) {
  const largestBSTSubtreeHelper = (root = initialRoot) => {
    if (root === null) {
      return {
        min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY, count: 0, is: true,
      };
    }

    const leftProps = largestBSTSubtreeHelper(root.left);
    const rightProps = largestBSTSubtreeHelper(root.right);

    if (leftProps.is && rightProps.is && leftProps.max < root.val && rightProps.min > root.val) {
      return {
        min: Math.min(Math.min(leftProps.min, rightProps.min), root.val),
        max: Math.max(Math.max(rightProps.max, leftProps.max), root.val),
        count: 1 + leftProps.count + rightProps.count,
        is: true,
      };
    }

    return {
      min: Math.min(leftProps.min, rightProps.min),
      max: Math.max(rightProps.max, leftProps.max),
      count: Math.max(leftProps.count, rightProps.count),
      is: leftProps.is || rightProps.is,
    };
  };

  return largestBSTSubtreeHelper().count;
}
