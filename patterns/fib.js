function fib(num, map = { 1: 1, 2: 1 }) {
  if (!map[num]) {
    map[num] = fib(num - 1) + fib(num - 2);
  }
  return map[num];
}

function fibi(num) {
  const map = { 1: 1, 2: 1 };

  for (let i = 3; i <= num; i++) {
    map[i] = map[i - 1] + map[i - 2];
  }

  return map[num];
}

console.log(fib(8));
console.log(fibi(8));
