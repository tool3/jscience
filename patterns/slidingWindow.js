// #region SLIDING WINDOW

function maxArraySum(arr, num) {
  let tempSum = 0;
  let maxSum = 0;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(tempSum, maxSum);
  }
  return maxSum;
}

// console.log(maxArraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3))
//#endregion
