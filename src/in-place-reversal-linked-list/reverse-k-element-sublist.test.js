import ListNode from '../ds/ListNode';
import reverseKElementSublist from './reverse-k-element-sublist';

test('Reverse every K-element Sub-list', () => {
  // eslint-disable-next-line max-len
  const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6, new ListNode(7, new ListNode(8))))))));

  expect(reverseKElementSublist(head, 3).toArray()).toEqual([3, 2, 1, 6, 5, 4, 8, 7]);
});
