// TC - O(2^N) SC - O(N)

export function knapsack(weights = [], profits = [], initialCapacity = 0) {
  if (initialCapacity === 0) { return 0; }

  const knapsackHelper = (currIndex = weights.length, capacity = initialCapacity) => {
    if (currIndex === 0 || capacity === 0) { return 0; }

    const weight = weights[currIndex - 1];

    if (weight > capacity) { return knapsackHelper(currIndex - 1, capacity); }

    return Math.max(
      knapsackHelper(currIndex - 1, capacity),
      profits[currIndex - 1] + knapsackHelper(currIndex - 1, capacity - weight),
    );
  };

  return knapsackHelper();
}

// TC - O(N * C) SC - O(N * C) + O(N)

export function knapsackMemo(weights = [], profits = [], initialCapacity = 0) {
  if (initialCapacity === 0) { return 0; }

  const dp = Array(weights.length + 1).fill(-1).map(() => Array(initialCapacity + 1).fill(-1));
  const knapsackHelper = (currIndex = weights.length, capacity = initialCapacity) => {
    if (currIndex === 0 || capacity === 0) { return 0; }
    if (dp[currIndex][capacity] !== -1) { return dp[currIndex][capacity]; }

    const weight = weights[currIndex - 1];

    if (weight > capacity) {
      return (dp[currIndex][capacity] = knapsackHelper(currIndex - 1, capacity));
    }

    return (dp[currIndex][capacity] = Math.max(
      knapsackHelper(currIndex - 1, capacity),
      profits[currIndex - 1] + knapsackHelper(currIndex - 1, capacity - weight),
    ));
  };

  return knapsackHelper();
}

// TC - O(N * C) SC - O(N * C)

export function knapsackTab(weights = [], profits = [], initialCapacity = 0) {
  if (initialCapacity === 0) { return 0; }

  const dp = Array(weights.length + 1).fill(-1).map(() => Array(initialCapacity + 1).fill(0));

  for (let i = 1; i <= weights.length; i += 1) {
    for (let j = 1; j <= initialCapacity; j += 1) {
      dp[i][j] = weights[i - 1] > j
        ? dp[i - 1][j]
        : Math.max(dp[i - 1][j], profits[i - 1] + dp[i - 1][j - weights[i - 1]]);
    }
  }

  return dp[weights.length][initialCapacity];
}

// TC - O(N * C) SC - O(2C)

export function knapsackTabOpt(weights = [], profits = [], initialCapacity = 0) {
  if (initialCapacity === 0) { return 0; }

  let prev = Array(initialCapacity + 1).fill(0);

  for (let i = 1; i <= weights.length; i += 1) {
    const curr = Array(initialCapacity + 1).fill(0);

    for (let j = 1; j <= initialCapacity; j += 1) {
      curr[j] = weights[i - 1] > j
        ? prev[j]
        : Math.max(prev[j], profits[i - 1] + prev[j - weights[i - 1]]);
    }

    prev = curr;
  }

  return prev[initialCapacity];
}

// TC - O(N * C) SC - O(C)

export function knapsackTabOpt2(weights = [], profits = [], initialCapacity = 0) {
  if (initialCapacity === 0) { return 0; }

  const prev = Array(initialCapacity + 1).fill(0);

  for (let i = 1; i <= weights.length; i += 1) {
    for (let j = initialCapacity; j >= 0; j -= 1) {
      prev[j] = weights[i - 1] > j
        ? prev[j]
        : Math.max(prev[j], profits[i - 1] + prev[j - weights[i - 1]]);
    }
  }

  return prev[initialCapacity];
}
