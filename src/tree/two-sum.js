// TC - O(N) SC - O(H)

/* eslint-disable func-names */

const BSTIterator = function (root) {
  this.stack = [];

  this.traverseLeft(root);
};

BSTIterator.prototype.next = function () {
  if (!this.hasNext()) { return undefined; }

  const item = this.stack.pop();

  this.traverseLeft(item.right);

  return item.val;
};

BSTIterator.prototype.peek = function () {
  if (!this.hasNext()) { return undefined; }

  return this.stack[this.stack.length - 1].val;
};

BSTIterator.prototype.hasNext = function () {
  return this.stack.length > 0;
};

BSTIterator.prototype.traverseLeft = function (root) {
  while (root) {
    this.stack.push(root);
    // eslint-disable-next-line no-param-reassign
    root = root.left;
  }

  return this;
};

const BSTReverseIterator = function (root) {
  this.stack = [];

  this.traverseRight(root);
};

BSTReverseIterator.prototype.next = function () {
  if (!this.hasNext()) { return undefined; }

  const item = this.stack.pop();

  this.traverseRight(item.left);

  return item.val;
};

BSTReverseIterator.prototype.hasNext = function () {
  return this.stack.length > 0;
};

BSTReverseIterator.prototype.traverseRight = function (root) {
  while (root) {
    this.stack.push(root);
    // eslint-disable-next-line no-param-reassign
    root = root.right;
  }

  return this;
};

BSTReverseIterator.prototype.peek = function () {
  if (!this.hasNext()) { return undefined; }

  return this.stack[this.stack.length - 1].val;
};

export default function twoSum(root = null, target = 0) {
  if (root === null) { return false; }

  const left = new BSTIterator(root);
  const right = new BSTReverseIterator(root);
  let leftNum = left.next();
  let rightNum = right.next();

  while (leftNum < rightNum) {
    const sum = leftNum + rightNum;

    if (sum === target) { return true; }
    if (sum < target) { leftNum = left.next(); } else { rightNum = right.next(); }
  }

  return false;
}
