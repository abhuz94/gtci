// TC - O(N) SC - O(k)

export default function minWindowString(str = '', pattern = '') {
  if (str.length < pattern.length) { return ''; }

  const charMap = new Map();
  const k = pattern.length;
  let substringIndices = [-1, -1];
  let windowStart = 0;
  let windowEnd = 0;
  let charCount = 0;
  let minLen = Number.POSITIVE_INFINITY;

  // eslint-disable-next-line no-restricted-syntax
  for (const char of pattern) {
    charMap.set(char, (charMap.get(char) || 0) + 1);
  }

  for (; windowEnd < str.length; windowEnd += 1) {
    const char = str[windowEnd];

    if (charMap.has(char)) {
      if (charMap.get(char) > 0) { charCount += 1; }

      charMap.set(char, charMap.get(char) - 1);
    }

    while (charCount === k) {
      const windowSize = windowEnd - windowStart + 1;

      if (windowSize < minLen) {
        minLen = windowSize;
        substringIndices = [windowStart, windowEnd + 1];
      }

      const staleChar = str[windowStart];

      if (charMap.has(staleChar)) {
        charMap.set(staleChar, charMap.get(staleChar) + 1);

        if (charMap.get(staleChar) > 0) { charCount -= 1; }
      }

      windowStart += 1;
    }
  }

  return str.substring(substringIndices[0], substringIndices[1]);
}
