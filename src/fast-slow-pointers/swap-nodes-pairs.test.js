import ListNode from '../ds/ListNode';
import swapNodesPairs from './swap-nodes-pairs';

test('Swap Nodes in Pairs', () => {
  const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));

  expect(swapNodesPairs(head).toArray()).toEqual([2, 1, 4, 3]);
});
