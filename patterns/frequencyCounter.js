
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
  