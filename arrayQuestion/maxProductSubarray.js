// Determin the maximum product of a subarray
// Time complexity: O(n)

// function maxProductSubarry(nums) {
//   let min = (max = 1)
//   let result = Math.max(...nums)

//   for (let num of nums) {
//     let temp = max * num
//     max = Math.max(temp, min * num, num)
//     min = Math.max(temp, min * num, num)

//     result = Math.max(max, result)
//   }

//   return result
// }

function maxProSub(arr) {
  let min = 1
  let max = 1
  let result = Math.max(...arr)

  for (let num of arr) {
    let temp = max * num
    max = Math.max(temp, min * num, num)
    min = Math.max(temp, min * num, num)

    result = Math.max(max, result)
  }
  return result
}

// console.log(maxProductSubarry([2, 3, -2, 4]))
// console.log(maxProductSubarry([-2, 0, -1]))
// console.log(maxProductSubarry([0]))

console.log(maxProSub([2, 3, -2, 4]))
console.log(maxProSub([-2, 0, -1, 2]))
console.log(maxProSub([0]))
