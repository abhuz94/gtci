// TC - O(N) + O(NlogN) SC - O(1)

export default function mergeIntervals(intervals = []) {
  if (intervals.length <= 1) { return intervals; }

  intervals.sort(([a], [b]) => a - b);

  const mergedIntervals = [intervals[0]];
  const isOverlapping = ([, endTime], [startTime]) => startTime <= endTime;

  for (let i = 1; i < intervals.length; i += 1) {
    const lastInterval = mergedIntervals[mergedIntervals.length - 1];
    const currInterval = intervals[i];

    if (isOverlapping(lastInterval, currInterval)) {
      lastInterval[1] = Math.max(lastInterval[1], currInterval[1]);
    } else { mergedIntervals.push(currInterval); }
  }

  return mergedIntervals;
}
