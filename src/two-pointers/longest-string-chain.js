export default function longestStringChain(words = []) {
  words.sort((a, b) => a.length - b.length);

  const canBeChained = (source, target) => {
    if (target.length !== source.length + 1) { return false; }

    let i = 0;
    let j = 0;

    while (i < source.length && j < target.length) {
      if (source[i] === target[j]) {
        i += 1;
        j += 1;
      } else {
        j += 1;
      }
    }

    return i === source.length;
  };
  const chains = Array(words.length).fill(1);

  for (let i = 0; i < words.length; i += 1) {
    for (let j = 0; j < i; j += 1) {
      if (canBeChained(words[j], words[i])) {
        chains[i] = Math.max(chains[i], 1 + chains[j]);
      }
    }
  }

  return Math.max(...chains);
}
