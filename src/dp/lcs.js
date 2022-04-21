const lcs = (text1 = '', text2 = '') => {
  const lcsHelper = (i = text1.length, j = text2.length) => {
    if (i === 0) { return 0; }
    if (j === 0) { return 0; }

    if (text1[i - 1] === text2[j - 1]) { return 1 + lcsHelper(i - 1, j - 1); }

    return Math.max(
      lcsHelper(i - 1, j),
      lcsHelper(i, j - 1),
    );
  };

  return lcsHelper();
};

const lcsMemo = (text1 = '', text2 = '') => {
  const dp = Array(text1.length + 1).fill(-1).map(() => Array(text2.length + 1).fill(-1));

  const lcsHelper = (i = text1.length, j = text2.length) => {
    if (i === 0) { return 0; }
    if (j === 0) { return 0; }
    if (dp[i][j] !== -1) { return dp[i][j]; }

    if (text1[i - 1] === text2[j - 1]) {
      return (dp[i][j] = 1 + lcsHelper(i - 1, j - 1));
    }

    return (dp[i][j] = Math.max(
      lcsHelper(i - 1, j),
      lcsHelper(i, j - 1),
    ));
  };

  return lcsHelper();
};

const lcsTab = (text1 = '', text2 = '') => {
  const dp = Array(text1.length + 1).fill(-1).map(() => Array(text2.length + 1).fill(0));

  for (let i = 1; i <= text1.length; i += 1) {
    for (let j = 1; j <= text2.length; j += 1) {
      dp[i][j] = text1[i - 1] === text2[j - 1]
        ? 1 + dp[i - 1][j - 1]
        : Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }

  return dp[text1.length][text2.length];
};

const lcsTabOpt = (text1 = '', text2 = '') => {
  let prev = Array(text2.length + 1).fill(0);

  for (let i = 1; i <= text1.length; i += 1) {
    const curr = Array(text2.length + 1).fill(0);

    for (let j = 1; j <= text2.length; j += 1) {
      curr[j] = text1[i - 1] === text2[j - 1]
        ? 1 + prev[j - 1]
        : Math.max(prev[j], curr[j - 1]);
    }

    prev = curr;
  }

  return prev[text2.length];
};

export {
  lcs, lcsMemo, lcsTab, lcsTabOpt,
};
