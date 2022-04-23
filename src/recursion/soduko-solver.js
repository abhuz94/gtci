export default function sodukoSolver(board) {
  const M = board.length;
  const N = board[0].length;
  const isSafe = (m, n, num) => {
    const gridRow = 3 * ((m / 3) >> 0);
    const gridCol = 3 * ((n / 3) >> 0);

    for (let i = 0; i < 9; i += 1) {
      if (board[m][i] === num) { return false; }
      if (board[i][n] === num) { return false; }
      if (board[gridRow + (i / 3) >> 0][gridCol + (i % 3) >> 0] === num) { return false; }
    }

    return true;
  };
  const solve = (m = M, n = N) => {
    if (m === 0) { return true; }

    const nextRow = n === 1 ? m - 1 : m;
    const nextCol = nextRow !== m ? N : n - 1;

    if (board[m - 1][n - 1] !== '.') { return solve(nextRow, nextCol); }

    for (let i = 1; i <= 9; i += 1) {
      if (isSafe(m - 1, n - 1, `${i}`)) {
        board[m - 1][n - 1] = `${i}`;

        if (solve(nextRow, nextCol)) { return true; }

        board[m - 1][n - 1] = '.';
      }
    }

    return false;
  };

  solve();

  return board;
}
