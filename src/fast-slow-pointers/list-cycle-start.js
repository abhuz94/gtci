// TC - O(N) SC - O(1)

export default function listCycleStart(head = null) {
  if (head === null || head.next === null) { return -1; }

  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;

    if (slow === fast) { break; }
  }

  if (fast === null) { return -1; }

  fast = head;
  let pos = 0;

  while (fast !== slow) {
    fast = fast.next;
    slow = slow.next;
    pos += 1;
  }

  return pos;
}
