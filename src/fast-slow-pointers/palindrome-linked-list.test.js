import ListNode from '../ds/ListNode';
import palindromeLinkedList from './palindrome-linked-list';

test('Palindrome Linked List', () => {
  const head = new ListNode(1, new ListNode(2, new ListNode(2, new ListNode(1))));

  expect(palindromeLinkedList(head)).toBeTruthy();
});
