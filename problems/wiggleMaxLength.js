function wiggleMaxLength(nums) {
  if (nums.length < 2) {
    return nums.length;
  }
  let up = 1;
  let down = 1;
  
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      up = down + 1;
    } else if (nums[i] < nums[i - 1]) {
      down = up + 1;
    }
  }

  return Math.max(down, up);
}

wiggleMaxLength([1, 7, 4, 9, 2, 5]);
