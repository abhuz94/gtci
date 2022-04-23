export default function rainWaterTrapping(height) {
//   const maxLeftPrefix = [];
//   const maxRightPrefix = [];
//   let maxLeft = 0;
//   let maxRight = 0;
//   let unitsOfWater = 0;

  //   for (let i = 0, j = height.length - 1; i < height.length; i += 1, j -= 1) {
  //     maxLeftPrefix.push(maxLeft);

  //     maxRightPrefix[j] = maxRight;
  //     maxLeft = Math.max(maxLeft, height[i]);
  //     maxRight = Math.max(maxRight, height[j]);
  //   }

  //   for (let i = 0; i < height.length; i += 1) {
  //     const currTrappedUnitsOfWater = Math.min(maxLeftPrefix[i], maxRightPrefix[i]) - height[i];

  //     unitsOfWater += currTrappedUnitsOfWater < 0 ? 0 : currTrappedUnitsOfWater;
  //   }

  //   return unitsOfWater;

  let i = 0;
  let j = height.length - 1;
  let leftMax = height[i];
  let rightMax = height[j];
  let unitsOfWater = 0;

  while (i < j) {
    if (leftMax <= rightMax) {
      const currTrappedUnitsOfWater = leftMax - height[i];
      unitsOfWater += currTrappedUnitsOfWater < 0 ? 0 : currTrappedUnitsOfWater;
    } else {
      const currTrappedUnitsOfWater = rightMax - height[j];
      unitsOfWater += currTrappedUnitsOfWater < 0 ? 0 : currTrappedUnitsOfWater;
    }

    leftMax = Math.max(height[i], leftMax);
    rightMax = Math.max(height[j], rightMax);

    if (leftMax <= rightMax) { i += 1; } else { j -= 1; }
  }

  return unitsOfWater;
}
