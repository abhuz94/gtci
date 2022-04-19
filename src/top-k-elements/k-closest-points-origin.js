// TC - O(Nlogk) SC - O(k)

import Heap from 'collections/heap';

const computeDistanceFromOrigin = ([x, y]) => x * x + y * y;

export default function kthClosestPointsOrigin(points = [], k = 0) {
  if (k === 0) { return null; }

  const maxHeap = new Heap([], null, ([a], [b]) => a - b);

  for (let i = 0; i < k; i += 1) {
    maxHeap.push([computeDistanceFromOrigin(points[i]), i]);
  }

  for (let i = k; i < points.length; i += 1) {
    const currPointDistance = computeDistanceFromOrigin(points[i]);

    if (maxHeap.peek()[0] > currPointDistance) {
      maxHeap.pop();
      maxHeap.push([currPointDistance, i]);
    }
  }

  return maxHeap.toArray().map(([, i]) => points[i]);
}
