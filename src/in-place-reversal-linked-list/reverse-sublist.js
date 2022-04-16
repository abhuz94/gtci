// TC - O(N) SC - O(1)

import ListNode from '../ds/ListNode';

export default function reverseSublist(head = null, p = 0, q = 0) {
  if (head === null || head.next === null || q <= p) { return head; }

  const dummy = new ListNode(Symbol('dummy'), head);
  let nodeBeforeSublist = dummy;
  let curr = dummy;

  for (let i = 0; i < p && curr; i += 1) {
    nodeBeforeSublist = curr;
    curr = curr.next;
  }

  if (curr === null) { return head; }

  const lastNodeOfSublist = curr;
  let temp = null;
  let prev = null;

  for (let i = 0; i <= q - p && curr; i += 1) {
    temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  nodeBeforeSublist.next = prev;
  lastNodeOfSublist.next = temp;

  return dummy.next;
}
