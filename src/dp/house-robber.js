const houseRobber = (houses = []) => {
  const houseRobberHelper = (houseIndex = houses.length - 1) => {
    if (houseIndex === 0) { return houses[houseIndex]; }
    if (houseIndex < 0) { return 0; }

    return Math.max(
      houseRobberHelper(houseIndex - 1),
      houses[houseIndex] + houseRobberHelper(houseIndex - 2),
    );
  };

  return houseRobberHelper();
};

const houseRobberMemo = (houses = []) => {
  const dp = Array(houses.length).fill(-1);
  const houseRobberHelper = (houseIndex = houses.length - 1) => {
    if (houseIndex === 0) { return houses[houseIndex]; }
    if (houseIndex < 0) { return 0; }
    if (dp[houseIndex] !== -1) { return dp[houseIndex]; }

    return (dp[houseIndex] = Math.max(
      houseRobberHelper(houseIndex - 1),
      houses[houseIndex] + houseRobberHelper(houseIndex - 2),
    ));
  };

  return houseRobberHelper();
};

const houseRobberTab = (houses = []) => {
  const dp = Array(houses.length).fill(0);
  // eslint-disable-next-line prefer-destructuring
  dp[0] = houses[0];

  for (let i = 1; i < houses.length; i += 1) {
    dp[i] = Math.max(dp[i - 1], houses[i] + (dp[i - 2] || 0));
  }

  return dp[houses.length - 1];
};

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

export {
  houseRobber, houseRobberMemo, houseRobberTab, houseRobberTabOpt,
};
