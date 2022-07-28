function searchInsert(nums, target) {
  let min = 0;
  let max = nums.length - 1;
  let mid = null;
  while (min <= max) {
    mid = Math.floor((min + max) / 2);
    if (nums[mid] > target) {
      max = mid - 1;
    } else if (nums[mid] < target) {
      min = mid + 1;
    } else {
      return mid;
    }
  }
  return min;
}

console.log(searchInsert([1, 3, 5, 6], 2));
