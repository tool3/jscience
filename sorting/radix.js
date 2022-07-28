function getDigitFancy(num, index) {
  return Math.floor(Math.abs(num) / Math.pow(10, index)) % 10;
}

function digitCountFancy(digit) {
  if (digit === 0) return 1;
  return Math.floor(Math.log10(Math.abs(digit))) + 1;
}

function maxDigits(arr) {
  return arr.reduce((acc, num) => Math.max(acc, digitCount(num)), 0);
}

function digitCount(digit) {
  return Math.abs(digit).toString().length;
}

function getDigit(num, index) {
  const numString = num.toString();
  const length = numString.length - 1;
  const result = Number(numString[length - index]);
  return isNaN(result) ? 0 : result;
}

function radix(nums) {
  const maxDigitCount = maxDigits(nums);
  for (let k = 0; k < maxDigitCount; k++) {
    const digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      const bucketPosition = getDigitFancy(nums[i], k);
      digitBuckets[bucketPosition].push(nums[i]);
    }

    nums = [].concat(...digitBuckets);
  }
  return nums;
}

const sorted = radix([2, 54, 3, 100, 35, 1, 232, 7]);
console.log(sorted);
