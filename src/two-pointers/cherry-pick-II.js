/* eslint-disable no-restricted-syntax */
export const cherryPick = (grid) => {
  const M = grid.length;
  const N = grid[0].length;
  const dx = [-1, 0, 1];
  const dp = new Map();
  const cherryPickHelper = (i = 0, alice = 1, bob = N) => {
    if (alice <= 0 || bob <= 0 || alice > N || bob > N) { return Number.NEGATIVE_INFINITY; }
    if (i === M - 1) {
      return alice === bob ? grid[i][alice - 1] : (grid[i][alice - 1] + grid[i][bob - 1]);
    }

    const key = `${i}_${alice}_${bob}`;

    if (dp.has(key)) { return dp.get(key); }

    let maxCherriesPicked = 0;

    for (const aliceX of dx) {
      for (const bobX of dx) {
        maxCherriesPicked = Math.max(
          maxCherriesPicked,
          cherryPickHelper(i + 1, alice + aliceX, bob + bobX)
            + (alice === bob ? grid[i][alice - 1] : (grid[i][alice - 1] + grid[i][bob - 1])),
        );
      }
    }

    dp.set(key, maxCherriesPicked);

    return maxCherriesPicked;
  };

  return cherryPickHelper();
};

export const cherryPickTab = (grid) => {
  const M = grid.length;
  const N = grid[0].length;
  const dx = [-1, 0, 1];
  let prev = Array(N + 2).fill(-1).map(() => Array(N + 2).fill(Number.NEGATIVE_INFINITY));

  for (let alice = 1; alice <= N; alice += 1) {
    for (let bob = 1; bob <= N; bob += 1) {
      prev[alice][bob] = alice === bob
        ? grid[M - 1][alice - 1]
        : (grid[M - 1][alice - 1] + grid[M - 1][bob - 1]);
    }
  }

  for (let i = M - 2; i >= 0; i -= 1) {
    const curr = Array(N + 2).fill(-1).map(() => Array(N + 2).fill(Number.NEGATIVE_INFINITY));

    for (let alice = N; alice >= 1; alice -= 1) {
      for (let bob = 1; bob <= N; bob += 1) {
        let maxCherriesPicked = 0;

        for (const aliceX of dx) {
          for (const bobX of dx) {
            maxCherriesPicked = Math.max(
              maxCherriesPicked,
              prev[alice + aliceX][bob + bobX]
                + (alice === bob ? grid[i][alice - 1] : (grid[i][alice - 1] + grid[i][bob - 1])),
            );
          }
        }

        curr[alice][bob] = maxCherriesPicked;
      }
    }

    prev = curr;
  }

  return prev[1][N];
};
