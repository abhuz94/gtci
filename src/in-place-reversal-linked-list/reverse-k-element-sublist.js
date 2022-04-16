// TC - O(N) SC - O(1)

import ListNode from '../ds/ListNode';

export default function reverseKElementSublist(head = null, k = 0) {
  if (head === null || head.next === null || k === 0) { return head; }

  const dummy = new ListNode(Symbol('dummy'), head);
  let nodeBeforeSublist = dummy;
  let curr = head;

  while (curr) {
    const lastNodeOfSublist = curr;
    let prev = null;
    let temp = null;

    for (let i = 0; i < k && curr; i += 1) {
      temp = curr.next;
      curr.next = prev;
      prev = curr;
      curr = temp;
    }

    nodeBeforeSublist.next = prev;
    lastNodeOfSublist.next = temp;
    nodeBeforeSublist = lastNodeOfSublist;
  }

  return dummy.next;
}
