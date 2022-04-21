const houseRobberTabOpt = (houses = []) => {
  let prev = 0;
  let curr = houses[0];

  for (let i = 1; i < houses.length; i += 1) {
    const temp = Math.max(curr, houses[i] + prev);

    prev = curr;
    curr = temp;
  }

  return curr;
};

export default function houseRobberII(nums) {
  return Math.max(
    houseRobberTabOpt(nums.slice(1)),
    houseRobberTabOpt(nums.slice(0, nums.length - 1)),
  );
}
