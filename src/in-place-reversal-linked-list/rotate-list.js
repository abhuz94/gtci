// TC - O(N) SC - O(1)

import ListNode from '../ds/ListNode';

export default function rotateList(head = null, k = 0) {
  if (head === null || head.next === null || k === 0) { return head; }

  const dummy = new ListNode(Symbol('dummy'), head);
  let lastNode = null;
  let curr = head;
  let rotationCount = k;
  let len = 0;

  while (curr) {
    lastNode = curr;
    curr = curr.next;
    len += 1;
  }

  rotationCount %= len;

  if (rotationCount === 0) { return head; }

  curr = dummy;

  for (let i = 0; i < len - rotationCount; i += 1) {
    curr = curr.next;
  }

  const temp = dummy.next;
  dummy.next = curr.next;
  curr.next = null;
  lastNode.next = temp;

  return dummy.next;
}
