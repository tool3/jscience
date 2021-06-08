function fib(num, map = {1: 1, 2: 1}) {
    if (!map[num]) {
      map[num] = fib(num - 1) + fib(num - 2)
    }
    return map[num];
}

console.log(fib(8))