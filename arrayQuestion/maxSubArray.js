// return the maximum result that can be gotten from a consequent numbers
// function maxSum(arr) {
// if (arr.length == 0) return 0
// let subSum = arr[0]
// let maxSum = arr[0]
// for (let i = 1; i < arr.length; i++) {
//   subSum = Math.max(subSum + arr[i], arr[i])
//   maxSum = Math.max(subSum, maxSum)
// }
// return maxSum
// }

function maxsum(arr) {
  let sum = arr[0]
  let maxSum = arr[0]

  for (let i = 0; i < arr.length; i++) {
    sum = Math.max(sum + arr[i], arr[i])
    maxSum = Math.max(sum, maxSum)
  }
  return maxSum
}

// console.log(maxSum([1, 2, 3, 4]))
// console.log(maxSum([-1, -2, -3, -4]))
console.log(maxsum([-2, 1, -3, 4, -1, 2, 1, 10, -5, 4]))
// console.log(maxSum([-1, -2, -3, 0, 0]))
// console.log(maxSum([]))
