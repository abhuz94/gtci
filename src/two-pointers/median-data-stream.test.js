import MedianFinder from './median-data-stream';

test('Find Median from Data Stream', () => {
  const medianFinder = new MedianFinder();
  medianFinder.addNum(1); // arr = [1]
  medianFinder.addNum(2); // arr = [1, 2]
  medianFinder.findMedian(); // return 1.5 (i.e., (1 + 2) / 2)
  expect(medianFinder.findMedian()).toEqual(1.5);
  medianFinder.addNum(3); // arr[1, 2, 3]
  medianFinder.findMedian(); // return 2.0
  expect(medianFinder.findMedian()).toEqual(2);
});
