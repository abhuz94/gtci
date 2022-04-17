// TC - O(N) SC - O(1)

export default function charReplacment(str = '', k = 0) {
  if (str.length <= 0) { return str.length; }

  const charMap = new Map();
  let windowStart = 0;
  let windowEnd = 0;
  let maxCharCount = 0;
  let maxLen = 0;

  for (; windowEnd < str.length; windowEnd += 1) {
    const char = str[windowEnd];

    charMap.set(char, (charMap.get(char) || 0) + 1);

    maxCharCount = Math.max(maxCharCount, charMap.get(char));

    if (windowEnd - windowStart + 1 - maxCharCount > k) {
      const staleChar = str[windowStart];
      windowStart += 1;

      charMap.set(staleChar, charMap.get(staleChar) - 1);
    }

    maxLen = Math.max(maxLen, windowEnd - windowStart + 1);
  }

  return maxLen;
}
