// TC - O(Nlogk) SC - O(k)

import Heap from 'collections/heap';

export default function kthLargestElement(arr = [], k = 0) {
  if (k === 0) { return null; }

  const minHeap = new Heap([], null, (a, b) => b - a);

  for (let i = 0; i < arr.length; i += 1) {
    if (minHeap.length === k && minHeap.peek() < arr[i]) { minHeap.pop(); }
    if (minHeap.length < k) { minHeap.push(arr[i]); }
  }

  return minHeap.peek();
}
