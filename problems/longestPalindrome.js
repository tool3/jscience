var longestPalindrome = function (s) {
  let result = '';
  let middle = Math.floor(s.length / 2);

  let left = middle - 1;
  let right = middle + 1;

  if (s.length === 1) return s;

  for (let i = 0; i < s.length; i++) {
    const leftChar = s[left];
    const rightChar = s[right];
    while (left > 0 && right < s.length && leftChar === rightChar) {
      left--;
      right++;
    }

    const palindrome = s.substring(left + 1, right);
    if (palindrome.length > result.length) result = palindrome;
  }

  return result;
};

// console.log(longestPalindrome('cbbd'));
console.log(longestPalindrome('babad'));
