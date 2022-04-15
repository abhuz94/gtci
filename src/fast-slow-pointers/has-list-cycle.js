// TC - O(N) SC - O(1)

export default function hasListCycle(head = null) {
  if (head === null || head.next === null) { return false; }

  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (fast === slow) { return true; }
  }

  return false;
}
