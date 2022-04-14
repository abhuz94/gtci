// TC - O(N) SC - O(k)

export default function kDistinctCharsLongestSubstr(str = '', k = 0) {
  if (k === 0) { return 0; }

  const charMap = new Map();
  let windowStart = 0;
  let windowEnd = 0;
  let maxLen = 0;

  for (; windowEnd < str.length; windowEnd += 1) {
    const char = str[windowEnd];

    charMap.set(char, (charMap.get(char) || 0) + 1);

    while (charMap.size > k) {
      const staleChar = str[windowStart];

      charMap.set(staleChar, charMap.get(staleChar) - 1);

      if (charMap.get(staleChar) === 0) { charMap.delete(staleChar); }

      windowStart += 1;
    }

    maxLen = Math.max(maxLen, windowEnd - windowStart + 1);
  }

  return maxLen;
}
