// TC - O(N) SC - O(1)

const getMid = (head = null) => {
  if (head === null || head.next === null) { return head; }

  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

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

export default function rearrangeList(head = null) {
  if (head === null || head.next === null) { return head; }

  const mid = getMid(head);
  const rev = reverse(mid.next);
  mid.next = null;

  let first = head;
  let second = rev;

  while (second) {
    const temp1 = first.next;
    const temp2 = second.next;
    first.next = second;
    second.next = temp1;
    first = temp1;
    second = temp2;
  }

  if (second) { second.next = null; }

  return head;
}
