/**
 * // This is the Iterator's API interface.
 * // You should not implement it, or speculate about its implementation.
 * function Iterator() {
 *    @ return {number}
 *    this.nextItem = function() { // return the next number of the iterator
 *       ...
 *    };
 *
 *    @return {boolean}
 *    this.hasNext = function() { // return true if it still has numbers
 *       ...
 *    };
 * };
 */

/**
 * @param {Iterator} iterator
 */
const PeekingIterator = function PeekingIterator(iterator) {
  this.iterator = iterator;
  this.nextItem = this.iterator.next();
};

/**
 * @return {number}
 */
PeekingIterator.prototype.peek = function peek() {
  if (this.nextItem !== null) { return this.nextItem; }

  this.nextItem = this.iterator.next();

  return this.nextItem;
};

/**
 * @return {number}
 */
PeekingIterator.prototype.next = function next() {
  const item = this.nextItem;

  this.nextItem = this.iterator.next();

  return item;
};

/**
 * @return {boolean}
 */
PeekingIterator.prototype.hasNext = function hasNext() {
  return this.nextItem;
};

/**
 * Your PeekingIterator object will be instantiated and called as such:
 * var obj = new PeekingIterator(arr)
 * var param_1 = obj.peek()
 * var param_2 = obj.next()
 * var param_3 = obj.hasNext()
 */

export default PeekingIterator;
