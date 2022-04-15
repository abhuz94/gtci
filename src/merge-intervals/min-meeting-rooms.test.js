import minMeetingRooms from './min-meeting-rooms';

test('Minimum Meeting Rooms', () => {
  expect(minMeetingRooms([[1, 4], [2, 5], [7, 9]])).toEqual(2);
  expect(minMeetingRooms([[6, 7], [2, 4], [8, 12]])).toEqual(1);
  expect(minMeetingRooms([[1, 4], [2, 3], [3, 6]])).toEqual(2);
  expect(minMeetingRooms([[4, 5], [2, 3], [2, 4], [3, 5]])).toEqual(2);
  expect(minMeetingRooms([[0, 5], [1, 2], [1, 10]])).toEqual(3);
  expect(minMeetingRooms([[0, 5], [1, 2], [6, 10]])).toEqual(2);
  expect(minMeetingRooms([[0, 5]])).toEqual(1);
});
