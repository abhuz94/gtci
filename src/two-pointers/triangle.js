export default function triangleSum(triangle) {
  const M = triangle.length;
  const dp = new Map();
  const triangleSumHelper = (i = 0, j = 0) => {
    if (j >= triangle[j].length) { return Number.POSITIVE_INFINITY; }
    if (i === M - 1) { return triangle[i][j]; }

    const key = `${i}_${j}`;

    if (dp.has(key)) { return dp.get(key); }

    const minPathSum = Math.min(
      triangleSumHelper(i + 1, j),
      triangleSumHelper(i + 1, j + 1),
    ) + triangle[i][j];

    dp.set(key, minPathSum);

    return minPathSum;
  };

  return triangleSumHelper();
}
