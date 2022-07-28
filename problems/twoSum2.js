var twoSum = function (numbers, target) {
  const map = {};
  for (let i = 0; i < numbers.length; i++) {
    const diff = target - numbers[i];
    if (diff in map) {
      return [map[diff], i + 1];
    } else {
      map[numbers[i]] = i + 1;
    }
  }
};
