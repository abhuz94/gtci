export default function editDistance(word1, word2) {
  const dp = Array(word1.length + 1).fill(-1).map(() => Array(word2.length + 1).fill(-1));
  const editDistanceHelper = (i = word1.length, j = word2.length) => {
    if (i === 0) { return j; }
    if (j === 0) { return i; }
    if (dp[i][j] !== -1) { return dp[i][j]; }
    if (word1[i - 1] === word2[j - 1]) { return (dp[i][j] = editDistanceHelper(i - 1, j - 1)); }

    return (dp[i][j] = Math.min(
      editDistanceHelper(i - 1, j), // delete
      editDistanceHelper(i, j - 1), // insert
      editDistanceHelper(i - 1, j - 1), // replace
    ) + 1);
  };

  return editDistanceHelper();
}
