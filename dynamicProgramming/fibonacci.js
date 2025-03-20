function fibonacci(num) {
  if (num <= 2) return num == 0 ? 0 : 1

  let prev1 = 0
  let prev2 = 1
  let result = 0

  for (let i = 2; i <= num; i++) {
    result = prev2 + prev1
    prev1 = prev2
    prev2 = result
  }

  return result
}

console.log(fibonacci(3))
console.log(fibonacci(4))

// Tribonacci

function tribonacci(num) {
  if (num <= 3) return num == 0 ? 0 : 1
  let prev1 = 0
  let prev2 = 1
  let prev3 = 1

  for (let i = 3; i <= num; i++) {
    result = prev1 + prev2 + prev3
    prev1 = prev2
    prev2 = prev3
    prev3 = result
  }

  return result
}

console.log(tribonacci(25))
console.log(tribonacci(4))
