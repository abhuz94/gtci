export default function uniquePaths(grid) {
  const M = grid.length;
  const N = grid[0].length;
  const startPoint = [0, 0];
  const endPoint = [M - 1, N - 1];
  const obstacles = new Set();
  let nonObstacleCount = M * N;

  for (let i = 0; i < M; i += 1) {
    for (let j = 0; j < N; j += 1) {
      if (grid[i][j] === 1) {
        startPoint[0] = i;
        startPoint[1] = j;
      } else if (grid[i][j] === -1) {
        obstacles.add(`${i}_${j}`);

        nonObstacleCount -= 1;
      } else if (grid[i][j] === 2) {
        endPoint[0] = i;
        endPoint[1] = j;
      }
    }
  }

  const dx = [0, 0, 1, -1];
  const dy = [-1, 1, 0, 0];

  const uniquePathsHelper = (
    m = startPoint[0],
    n = startPoint[1],
    currNonObstacleCount = 0,
    visited = new Set(),
  ) => {
    if (m === endPoint[0] && n === endPoint[1]) {
      return currNonObstacleCount + 1 === nonObstacleCount ? 1 : 0;
    }

    const key = `${m}_${n}`;

    if (obstacles.has(key) || m < 0 || n < 0 || m >= M || n >= N || visited.has(key)) { return 0; }

    visited.add(key);

    let count = 0;

    for (let i = 0; i < dx.length; i += 1) {
      count += uniquePathsHelper(m + dx[i], n + dy[i], currNonObstacleCount + 1, visited);
    }

    visited.delete(key);

    return count;
  };

  return uniquePathsHelper();
}
