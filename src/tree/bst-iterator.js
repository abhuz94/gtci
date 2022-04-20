// TC - O(N) SC - O(H)

/* eslint-disable func-names */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 */
const BSTIterator = function (root) {
  this.stack = [];

  this.traverseLeft(root);
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function () {
  if (!this.hasNext()) { return undefined; }

  const item = this.stack.pop();

  this.traverseLeft(item.right);

  return item.val;
};

/**
 * @return {boolean}
 */
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

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */

export default BSTIterator;
