// TC - O(2^N) SC - O(1)

const climbingStairs = (n) => {
  if (n <= 2) { return n; }

  return climbingStairs(n - 1) + climbingStairs(n - 2);
};

// TC - O(N) SC - O(N) + O(N)

const climbingStairsMemo = (n, dp = Array(n + 1).fill(-1)) => {
  if (n <= 2) { return n; }
  if (dp[n] !== -1) { return dp[n]; }

  dp[n] = climbingStairsMemo(n - 1, dp) + climbingStairsMemo(n - 2, dp);

  return dp[n];
};

// TC - O(N) SC - O(N)

const climbingStairsTab = (n) => {
  const dp = Array(n + 1).fill(0);
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n; i += 1) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
};

// TC - O(N) SC - O(1)

const climbingStairsOpt = (n) => {
  if (n <= 1) { return n; }

  let prev = 1;
  let curr = 2;

  for (let i = 3; i <= n; i += 1) {
    const temp = prev + curr;
    prev = curr;
    curr = temp;
  }

  return curr;
};

export {
  climbingStairs, climbingStairsMemo, climbingStairsTab, climbingStairsOpt,
};
