// ALL ARRAYS ARE EXPECTED TO BE SORTED

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


// #region BINARY SEARCH
function search(arr, num) {
  let min = 0;
  let max = arr.length - 1;
  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let current = arr[middle];

    if (current < num) {
      min = middle + 1;
    } else if (current > num) {
      max = middle - 1;
    } else {
      return middle;
    }
  }

  return -1;
}

// console.log(search([1, 2, 3, 4, 5, 6, 7, 8, 9], 6));

//#endregion


// #region MULTIPLE POINTERS
function sum(arr, num) { 
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];

    if (sum === num) {
      return [arr[left], arr[right]]
    }  else if (sum > num) {
      right--;
    } else {
      left++;
    }
  }

  return undefined;

}

// console.log(sumZero([-1, 0, 1, 2], 3));


function countUnique(arr) {
  let first = 0;
  let second = 1;
  while (second <= arr.length) {
    if (arr[first] === arr[second]) {
      second++;
    }  else {
      first++;
      arr[first] = arr[second];
      second++; 
    }
  }
  return first;
}

function countUniqueLoop(arr) {
  let index = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[index] !== arr[i]) {
      index++;
      arr[index] = arr[i]; 
    }
  }
  return index + 1;
}

// console.log(countUnique([1, 1, 1, 1, 4, 4, 4, 5, 6]))
// console.log(countUniqueLoop([1, 1, 1, 1, 4, 4, 4, 5, 6]))
// console.log(countUnique([1, 1, 1, 1, 2, 2, 2, 3, 4, 4, 4, 5, 6, 6, 7]))
// console.log(countUniqueLoop([1, 1, 1, 1, 2, 2, 2, 3, 4, 4, 4, 5, 6, 6, 7]))

//#endregion


//#region FREQUENCY COUNTER

function validAnagram(source, target) {
  const letters = {};
  for (const letter of source) {
      letters[letter] = ++letters[letter] || 1
  }

  for (const letter of target) {
    if (letters[letter]) {
      letters[letter]--;
    } else {
      return false
    }
  }

  return true;
}

console.log(validAnagram('aaarrr', 'rrraaa'))

//#endregion
