function findConcat(words) {
  const dict = new Set(words);
  let cache = null;

  const results = [];

  for (const word of words) {
    dict.delete(word);

    cache = Array(word.length);

    if (word.length > 0 && isConcat(0, [...word])) {
      results.push(word);
    }

    dict.add(word);
  }

  function isConcat(start, arr) {
    const end = arr.length - 1;
    if (start > end) return true;
    if (cache[start]) return cache[start];

    let word = '';

    cache[start] = false;

    for (let index = start; index <= end; index++) {
      word += arr[index];
      if (dict.has(word)) {
        cache[start] = isConcat(index + 1, arr);
      }
      if (cache[start]) break;
    }

    return cache[start];
  }

  return results;
}

// console.log(findConcat(['cat', 'dog', 'catdog']));
console.log(findConcat(['cat', 'cats', 'catsdogcats', 'dog', 'dogcatsdog', 'hippopotamuses', 'rat', 'ratcatdogcat']));

// create a dictionary (Set) from words array
// create a cache variable and set it to null
// create an empty results array
// loop over original words array and for each item:
// delete it from the dictionary
// if it's length is greater than 0:
// call isConcat, with start index and the characters of the word separated in an array, and if it returns true, add it to the results array.
// add the original word back to the dictionary

// isConcatenated is a function that receives a start index and an array of characters.
// the function declares the end variable with the length of the passed array minus one.
// if start is greater than end return true
// if the cache has this index with a value of true, return it.
// declate an empty string called `word`
// set the current index at the cache to false
// loop over starting from the `start` argument until it eqauls the `end` variable
// append the current character to `word`
// if the dictionary has `word` -> set the cache start to a call to isConcat with the current index + 1 and the character array argument passed to the original isConcat function
// after this we check again if the cache has the start argument passed to the original isConcat function, and if it is true, break from the loop.
