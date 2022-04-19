import ListNode from '../ds/ListNode';
import listCycleStart from './list-cycle-start';

test('Linked List Cycle Start', () => {
  const four = new ListNode(4);
  const two = new ListNode(2, new ListNode(0, four));
  const head = new ListNode(3, two);
  four.next = two;

  expect(listCycleStart(head)).toEqual(1);
});
