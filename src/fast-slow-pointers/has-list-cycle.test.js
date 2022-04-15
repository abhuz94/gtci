import hasListCycle from './has-list-cycle';
import ListNode from '../ds/ListNode';

test('LinkedList Cycle', () => {
  const six = new ListNode(6);
  const three = new ListNode(3, new ListNode(4, new ListNode(5, six)));
  const list = new ListNode(1, new ListNode(2, three));
  six.next = three;

  expect(hasListCycle(list)).toBeTruthy();

  six.next = null;

  expect(hasListCycle(list)).toBeFalsy();
});
