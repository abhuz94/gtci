const lisubstring = (nums1, nums2) => {
  const lisubstringHelper = (i = nums1.length, j = nums2.length, maxLen = 0) => {
    if (i === 0 || j === 0) { return maxLen; }

    return Math.max(
      nums1[i - 1] === nums2[j - 1]
        ? Math.max(lisubstringHelper(i - 1, j - 1, maxLen + 1), maxLen)
        : maxLen,
      lisubstringHelper(i, j - 1, 0),
      lisubstringHelper(i - 1, j, 0),
    );
  };

  return lisubstringHelper();
};

const lisubstringMemo = (nums1, nums2) => {
  const dp = new Map();
  const lisubstringHelper = (i = nums1.length, j = nums2.length, maxLen = 0) => {
    if (i === 0) { return maxLen; }
    if (j === 0) { return maxLen; }

    const key = `${i}_${j}_${maxLen}`;

    if (dp.has(key)) { return dp.get(key); }

    dp.set(key, Math.max(
      nums1[i - 1] === nums2[j - 1]
        ? lisubstringHelper(i - 1, j - 1, maxLen + 1)
        : maxLen,
      lisubstringHelper(i, j - 1, 0),
      lisubstringHelper(i - 1, j, 0),
    ));

    return dp.get(key);
  };

  return lisubstringHelper();
};

const lisubstringTab = (nums1, nums2) => {
  let prev = Array(nums2.length + 1).fill(0);
  let maxLen = 0;

  for (let i = 1; i <= nums1.length; i += 1) {
    const curr = Array(nums2.length + 1).fill(0);

    for (let j = 1; j <= nums2.length; j += 1) {
      if (nums1[i - 1] === nums2[j - 1]) {
        curr[j] = 1 + prev[j - 1];
        maxLen = Math.max(curr[j], maxLen);
      } else {
        curr[j] = 0;
      }
    }

    prev = curr;
  }

  return maxLen;
};

export { lisubstring, lisubstringMemo, lisubstringTab };
