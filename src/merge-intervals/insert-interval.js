// TC - O(N) SC - O(1)

export default function insertInterval(intervals = [], interval = []) {
  if (!intervals.length) { return [interval]; }

  const mergedIntervals = [];
  const isOverlapping = ([, endTime], [startTime]) => startTime <= endTime;
  let currIntervalIndex = 0;

  while (currIntervalIndex < intervals.length
        && !isOverlapping(intervals[currIntervalIndex], interval)) {
    mergedIntervals.push(intervals[currIntervalIndex]);

    currIntervalIndex += 1;
  }
  while (currIntervalIndex < intervals.length
        && isOverlapping(interval, intervals[currIntervalIndex])) {
    interval[0] = Math.min(intervals[currIntervalIndex][0], interval[0]);
    interval[1] = Math.max(intervals[currIntervalIndex][1], interval[1]);

    currIntervalIndex += 1;
  }

  mergedIntervals.push(interval);

  while (currIntervalIndex < intervals.length) {
    mergedIntervals.push(intervals[currIntervalIndex]);

    currIntervalIndex += 1;
  }

  return mergedIntervals;
}
