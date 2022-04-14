// TC - O(N) SC - O(N)

export default function noRepeatSubstr(str = '') {
  if (str.length <= 1) { return str.length; }

  const charSet = new Set();
  let windowStart = 0;
  let windowEnd = 0;
  let maxLen = 0;

  for (; windowEnd < str.length; windowEnd += 1) {
    const char = str[windowEnd];

    if (charSet.has(char)) { windowStart = windowEnd; } else { charSet.add(char); }

    maxLen = Math.max(maxLen, windowEnd - windowStart + 1);
  }

  return maxLen;
}
