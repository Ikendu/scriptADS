// how many ways can you climb N stairs when you can choose to take a step or two steps at a time

// Wrong appraoch ...wrong ans
function climbing(n) {
  if (n == 1 || n == 0) return 1
  if (n <= 3) return 3

  let num = 3
  let result = 0

  while (num <= n) {
    result += num - 2 + (num - 1)
    num++
  }
  return result
}

console.log(climbing(10))

// Recursive approach

function climbing1(n) {
  function dfs(a) {
    if (a == 1 || a == 0) return 1
    return dfs(a - 2) + dfs(a - 1)
  }

  return dfs(n)
}

console.log(climbing1(10))
