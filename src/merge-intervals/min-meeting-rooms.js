// TC - O(N) + O(NlogN) + O(logN) SC - O(N)

import Heap from 'collections/heap';

export default function minMeetingRooms(meetings = []) {
  meetings.sort(([a], [b]) => a - b);

  const rooms = new Heap([meetings[0]], null, ([, a], [, b]) => b - a);
  const isOverlapping = ([, endTime], [startTime]) => startTime < endTime;
  let minRooms = 1;

  for (let i = 1; i < meetings.length; i += 1) {
    while (rooms.length && !isOverlapping(rooms.peek(), meetings[i])) {
      rooms.pop();
    }

    rooms.push(meetings[i]);

    minRooms = Math.max(minRooms, rooms.length);
  }

  return minRooms;
}
