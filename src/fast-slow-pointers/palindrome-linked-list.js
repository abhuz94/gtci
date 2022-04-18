// TC - O(N) SC - O(1)

const getMid = (head = null) => {
  if (head === null || head.next === null) { return head; }

  let prev = null;
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    prev = slow;
    slow = slow.next;
  }

  if (prev) { prev.next = null; }

  return slow;
};

const reverse = (head = null) => {
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
};

export default function palindromeLinkedList(head = null) {
  if (head === null || head.next === null) { return true; }

  const mid = getMid(head);
  let first = head;
  let second = reverse(mid);

  while (second) {
    if (first.val !== second.val) { return false; }

    first = first.next;
    second = second.next;
  }

  if (first) { return false; }

  return true;
}
