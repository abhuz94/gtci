import ListNode from '../ds/ListNode';
import linkedListMiddle from './linked-list-middle';

test('Middle of the Linked List', () => {
  const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));

  expect(linkedListMiddle(head)).toEqual(3);
});
