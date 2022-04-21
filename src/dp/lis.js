const lis = (arr = []) => {
  const lisHelper = (i = 0, prevIndex = -1) => {
    if (i === arr.length) { return 0; }
    if (prevIndex !== -1 && arr[prevIndex] >= arr[i]) {
      return lisHelper(i + 1, prevIndex);
    }

    return Math.max(
      lisHelper(i + 1, prevIndex),
      1 + lisHelper(i + 1, i),
    );
  };

  return lisHelper();
};

const lisMemo = (arr = []) => {
  const dp = Array(arr.length).fill(-1).map(() => Array(arr.length + 1).fill(-1));
  const lisHelper = (i = 0, prevIndex = -1) => {
    if (i === arr.length) { return 0; }
    if (dp[i][prevIndex + 1] !== -1) { return dp[i][prevIndex + 1]; }
    if (prevIndex !== -1 && arr[prevIndex] >= arr[i]) {
      return (dp[i][prevIndex + 1] = lisHelper(i + 1, prevIndex));
    }

    return (dp[i][prevIndex + 1] = Math.max(
      lisHelper(i + 1, prevIndex),
      1 + lisHelper(i + 1, i),
    ));
  };

  return lisHelper();
};

const lisTab = (arr = []) => {
  const dp = Array(arr.length).fill(1);

  for (let i = 0; i < arr.length; i += 1) {
    for (let j = 0; j < i; j += 1) {
      if (arr[i] > arr[j]) {
        dp[i] = Math.max(dp[i], 1 + dp[j]);
      }
    }
  }

  return Math.max(...dp);
};

const lisTabOpt = (arr = []) => {
  const dp = [];
  const binaryInsert = (key) => {
    let low = 0;
    let high = dp.length - 1;

    while (low <= high) {
      const mid = low + ((high - low) / 2) >> 0;

      if (dp[mid] === key) { return; }
      if (key < dp[mid]) { high = mid - 1; } else { low = mid + 1; }
    }

    dp[low] = key;
  };

  for (let i = 0; i < arr.length; i += 1) {
    binaryInsert(arr[i]);
  }

  return dp.length;
};

export {
  lis, lisMemo, lisTab, lisTabOpt,
};
