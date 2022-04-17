// TC - O(2^N) SC - O(1)

const fib = (n) => {
  if (n <= 1) { return n; }

  return fib(n - 1) + fib(n - 2);
};

// TC - O(N) SC - O(N) + O(N)

const fibMemo = (n, dp = Array(n + 1).fill(-1)) => {
  if (n <= 1) { return n; }
  if (dp[n] !== -1) { return dp[n]; }

  dp[n] = fibMemo(n - 1, dp) + fibMemo(n - 2, dp);

  return dp[n];
};

// TC - O(N) SC - O(N)

const fibTab = (n) => {
  const dp = Array(n + 1).fill(0);
  dp[0] = 0;
  dp[1] = 1;

  for (let i = 2; i <= n; i += 1) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
};

// TC - O(N) SC - O(1)

const fibOpt = (n) => {
  if (n === 0) { return 0; }

  let prev = 0;
  let curr = 1;

  for (let i = 2; i <= n; i += 1) {
    const temp = prev + curr;
    prev = curr;
    curr = temp;
  }

  return curr;
};

export {
  fib, fibMemo, fibTab, fibOpt,
};
