function maxSum(arr) {
  if (arr.length == 0) return 0

  let subArr = arr[0]
  let maxSub = arr[0]

  for (let i = 1; i < arr.length; i++) {
    subArr = Math.max(subArr + arr[i], arr[i])
    maxSub = Math.max(subArr, maxSub)
  }
  return maxSub
}

console.log(maxSum([1, 2, 3, 4]))
console.log(maxSum([-1, -2, -3, -4]))
console.log(maxSum([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
console.log(maxSum([-1, -2, -3, 0, 0]))
// console.log(maxSum([]))
