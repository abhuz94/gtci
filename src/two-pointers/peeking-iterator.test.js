import PeekingIterator from './peeking-iterator';

class Iterator {
  constructor(nums = []) {
    this.nums = nums;
    this.currPos = 0;
  }

  next() {
    const item = this.nums[this.currPos];
    this.currPos += 1;

    return item;
  }

  hasNext() { return this.currPos < this.nums.length; }
}

test('Peeking Iterator', () => {
  const iterator = new Iterator([1, 2, 3, 4]);
  const peekingIterator = new PeekingIterator(iterator);

  expect(peekingIterator.hasNext()).toBeTruthy();
  expect(peekingIterator.peek()).toEqual(1);
  expect(peekingIterator.peek()).toEqual(1);
  expect(peekingIterator.next()).toEqual(1);
  expect(peekingIterator.next()).toEqual(2);
  expect(peekingIterator.peek()).toEqual(3);
  expect(peekingIterator.peek()).toEqual(3);
  expect(peekingIterator.next()).toEqual(3);
  expect(peekingIterator.hasNext()).toBeTruthy();
  expect(peekingIterator.peek()).toEqual(4);
  expect(peekingIterator.hasNext()).toBeTruthy();
  expect(peekingIterator.next()).toEqual(4);
  expect(peekingIterator.hasNext()).toBeFalsy();
});
