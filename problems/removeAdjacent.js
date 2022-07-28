var removeDuplicates = function (s, k) {
  const stack = [];

  for (const char of s) {
    if (stack.length && stack[stack.length - 1][0] === char) {
      stack[stack.length - 1][1] += 1;
    } else {
      stack.push([char, 1]);
    }

    if (stack[stack.length - 1][1] === k) {
      stack.pop();
    }
  }

  let res = '';
  for (const set of stack) {
    const count = set[1];
    res += set[0].repeat(count);
  }

  return res || s;
};

// console.log(removeDuplicates('abcd', 2));
// console.log(removeDuplicates('deeedbbcccbdaa', 3));
console.log(removeDuplicates('pbbcggttciiippooaais', 2));
