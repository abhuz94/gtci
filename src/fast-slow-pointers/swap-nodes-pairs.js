// TC - O(N) SC - O(1)

import ListNode from '../ds/ListNode';

export default function swapNodesPairs(head = null) {
  if (head === null || head.next === null) { return head; }

  const dummy = new ListNode(Symbol('dummy'), head);
  let nodeBeforeSublist = dummy;
  let curr = head;

  while (curr) {
    const lastNodeOfSublist = curr;
    let prev = null;
    let temp = null;

    for (let i = 1; i <= 2 && curr; i += 1) {
      temp = curr.next;
      curr.next = prev;
      prev = curr;
      curr = temp;
    }

    lastNodeOfSublist.next = temp;
    nodeBeforeSublist.next = prev;
    nodeBeforeSublist = lastNodeOfSublist;
  }

  return dummy.next;
}
