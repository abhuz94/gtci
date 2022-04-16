import reverseList from './reverse-list';
import ListNode from '../ds/ListNode';

test('Reverse a LinkedList', () => {
  const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));

  expect(reverseList(head).toArray()).toEqual([4, 3, 2, 1]);
});
