
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
  
  