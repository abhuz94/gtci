// TC - O(N * M * n) SC - O(k)

export default function findSubstring(str = '', words = []) {
  const wordsMap = new Map();
  const k = words[0].length;
  const indices = [];

  // eslint-disable-next-line no-restricted-syntax
  for (const word of words) {
    wordsMap.set(word, (wordsMap.get(word) || 0) + 1);
  }

  for (let i = 0; i < str.length; i += k) {
    const seenWords = new Map();

    for (let j = 0; j < words.length; j += 1) {
      const wordIndex = i + j * k;
      const word = str.substring(wordIndex, wordIndex + k);

      if (!wordsMap.has(word)) { break; }

      seenWords.set(word, (seenWords.get(word) || 0) + 1);

      if (seenWords.get(word) > wordsMap.get(word)) { break; }
      if (j + 1 === words.length) { indices.push(i); }
    }
  }

  return indices;
}
