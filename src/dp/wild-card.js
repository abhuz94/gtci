export default function wildCard(s, p) {
  const dp = Array(s.length + 1).fill(-1).map(() => Array(p.length + 1).fill(-1));
  const wildCardHelper = (i = s.length, j = p.length) => {
    if (i === 0) {
      let currPos = j;

      while (p[currPos - 1] === '*' && currPos > 0) { currPos -= 1; }

      return currPos === 0;
    }
    if (j === 0) { return i === 0; }
    if (dp[i][j] !== -1) { return dp[i][j]; }
    if (s[i - 1] === p[j - 1] || p[j - 1] === '?') {
      return (dp[i][j] = wildCardHelper(i - 1, j - 1));
    }
    if (p[j - 1] === '*') {
      return (dp[i][j] = wildCardHelper(i, j - 1) || wildCardHelper(i - 1, j));
    }

    return (dp[i][j] = false);
  };

  return wildCardHelper();
}
