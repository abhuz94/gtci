// TC - O(N) SC - O(N)

export default function noRepeatSubstr(str = '') {
  if (str.length <= 1) { return str.length; }

  const charMap = new Map();
  let windowStart = 0;
  let windowEnd = 0;
  let maxLen = 0;

  for (; windowEnd < str.length; windowEnd += 1) {
    const char = str[windowEnd];

    if (charMap.has(char)) { windowStart = Math.max(charMap.get(char) + 1, windowStart); }

    charMap.set(char, windowEnd);

    maxLen = Math.max(maxLen, windowEnd - windowStart + 1);
  }

  return maxLen;
}
