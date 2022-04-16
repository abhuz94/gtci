import reverseSublist from './reverse-sublist';
import ListNode from '../ds/ListNode';

test('Reverse a Sub-list', () => {
  // eslint-disable-next-line max-len
  const listNode = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));

  expect(reverseSublist(listNode, 2, 4).toArray()).toEqual([1, 4, 3, 2, 5]);
});
