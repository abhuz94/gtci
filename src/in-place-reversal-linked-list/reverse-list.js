// TC - O(N) SC - O(1)

export default function reverseList(head = null) {
  if (head === null || head.next === null) { return head; }

  let prev = null;
  let curr = head;

  while (curr) {
    const temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  return prev;
}
