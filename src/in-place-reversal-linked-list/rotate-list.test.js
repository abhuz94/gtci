import ListNode from '../ds/ListNode';
import rotateList from './rotate-list';

test('Rotate a LinkedList', () => {
  // eslint-disable-next-line max-len
  const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6))))));

  expect(rotateList(head, 3).toArray()).toEqual([4, 5, 6, 1, 2, 3]);
});
