import ListNode from '../ds/ListNode';
import rearrangeList from './rearrange-list';

test('Rearrange a LinkedList', () => {
  const head = new ListNode(
    2,
    new ListNode(4, new ListNode(6, new ListNode(8, new ListNode(10)))),
  );

  expect(rearrangeList(head).toArray()).toEqual([2, 10, 4, 8, 6]);
});
