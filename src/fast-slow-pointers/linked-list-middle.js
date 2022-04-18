// TC - O(N) SC - O(1)

export default function linkedListMiddle(head = null) {
  if (head === null || head.next === null) { return head; }

  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow.val;
}
