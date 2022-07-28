function findMissingNumber(arr) {
  const sorted = arr.sort((a, b) => a - b);
  for (let i = 0; i < sorted.length - 1; i++) {
    if (arr[i] + 1 !== arr[i + 1]) {
      return arr[i + 1] - 1;
    }
  }
}

console.log(findMissingNumber([200, 203, 205, 201, 204]));
