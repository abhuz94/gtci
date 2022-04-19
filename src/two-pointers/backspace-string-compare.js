// TC - O(N) SC - O(1)

export default function backspaceStringCompare(s = '', t = '') {
  let i = s.length - 1;
  let j = t.length - 1;

  while (i >= 0 || j >= 0) {
    let bs1 = 0;
    let bs2 = 0;

    while (i >= 0) {
      if (s[i] === '#') { bs1 += 1; } else if (bs1 > 0) { bs1 -= 1; } else { break; }
      i -= 1;
    }

    while (j >= 0) {
      if (t[j] === '#') { bs2 += 1; } else if (bs2 > 0) { bs2 -= 1; } else { break; }
      j -= 1;
    }

    if (i < 0 && j < 0) { return true; }
    if (s[i] !== t[j]) { return false; }

    i -= 1;
    j -= 1;
  }

  return true;
}
