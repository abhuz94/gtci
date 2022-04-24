export default function scs(str1, str2) {
  const dp = Array(str1.length + 1).fill(-1).map(() => Array(str2.length + 1).fill(0));
  const reverse = (s) => {
    let r = '';

    for (let i = s.length - 1; i >= 0; i -= 1) { r += s[i]; }

    return r;
  };
  dp[0][0] = 1;

  for (let i = 1; i <= str1.length; i += 1) {
    for (let j = 1; j <= str2.length; j += 1) {
      dp[i][j] = str1[i - 1] === str2[j - 1]
        ? 1 + dp[i - 1][j - 1]
        : Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }

  let i = str1.length;
  let j = str2.length;
  let superSeq = '';

  while (i > 0 && j > 0) {
    if (str1[i - 1] === str2[j - 1]) {
      superSeq += str1[i - 1];
      i -= 1;
      j -= 1;
    } else if (dp[i - 1][j] > dp[i][j - 1]) {
      superSeq += str1[i - 1];
      i -= 1;
    } else {
      superSeq += str2[j - 1];
      j -= 1;
    }
  }

  while (i > 0) {
    superSeq += str1[i - 1];
    i -= 1;
  }

  while (j > 0) {
    superSeq += str2[j - 1];
    j -= 1;
  }

  return reverse(superSeq);
}
