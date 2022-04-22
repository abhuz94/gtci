export default function uniquePaths(m = 0, n = 0) {
  if (m === 0 && n === 0) { return 1; }

  const N = m + n - 2;
  const r = m - 1;
  let res = 1;

  for (let i = 1; i <= r; i += 1) {
    res = (res * (N - r + i)) / i;
  }

  return res;
}
