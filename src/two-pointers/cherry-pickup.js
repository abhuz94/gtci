export default function cherryPickup(grid) {
  const M = grid.length;
  const N = grid[0].length;
  let hasReachedHome = false;
  const dp = new Map();
  const cherryPickupHelper = (i = 0, j = 0, x = 0, y = 0) => {
    if (x === M - 1 && y === N - 1) {
      hasReachedHome = true;

      return Number(grid[x][y] === 1);
    }
    if (i >= M || x >= M || j >= N || y >= N || grid[i][j] === -1 || grid[x][y] === -1) {
      return Number.NEGATIVE_INFINITY;
    }

    const key = `${i}_${j}_${x}_${y}`;

    if (dp.has(key)) { return dp.get(key); }

    const maxPickedCherries = Math.max(
      cherryPickupHelper(i, j + 1, x, y + 1),
      cherryPickupHelper(i + 1, j, x + 1, y),
      cherryPickupHelper(i, j + 1, x + 1, y),
      cherryPickupHelper(i + 1, j, x, y + 1),
    ) + (i === x && j === y ? grid[x][y] : (grid[x][y] + grid[i][j]));

    dp.set(key, maxPickedCherries);

    return maxPickedCherries;
  };

  const cherriesPicked = cherryPickupHelper();

  return hasReachedHome ? cherriesPicked : 0;
}
