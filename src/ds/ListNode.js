export default class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }

  toArray(arr = []) {
    arr.push(this.val);

    return this.next ? this.next.toArray(arr) : arr;
  }

  toString() { return this.toArray().join('->'); }
}
