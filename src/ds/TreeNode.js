export default class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }

  toArray(arr = []) {
    if (this.left) { this.left.toArray(arr); }

    arr.push(this.val);

    if (this.right) { this.right.toArray(arr); }

    return arr;
  }
}
