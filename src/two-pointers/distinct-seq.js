export const distinctSeq = (s, t) => {
  const dp = Array(s.length + 1).fill(-1).map(() => Array(t.length + 1).fill(-1));
  const distinctSeqHelper = (i = s.length, j = t.length) => {
    if (j === 0) { return 1; }
    if (i === 0) { return 0; }
    if (dp[i][j] !== -1) { return dp[i][j]; }
    if (s[i - 1] !== t[j - 1]) { return (dp[i][j] = distinctSeqHelper(i - 1, j)); }

    return (dp[i][j] = distinctSeqHelper(i - 1, j - 1) + distinctSeqHelper(i - 1, j));
  };

  return distinctSeqHelper();
};

export const distinctSeqTab = (s, t) => {
  let prev = Array(t.length + 1).fill(0);
  prev[0] = 1;

  for (let i = 1; i <= s.length; i += 1) {
    const curr = Array(t.length + 1).fill(0);
    curr[0] = 1;

    for (let j = 0; j <= t.length; j += 1) {
      curr[j] = s[i - 1] !== t[j - 1] ? prev[j] : prev[j - 1] + prev[j];
    }

    prev = curr;
  }

  return prev[t.length];
};
