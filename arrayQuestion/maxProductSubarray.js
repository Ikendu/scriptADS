// Determin the maximum product of a subarray
// Time complexity: O(n)

function maxProductSubarry(nums) {
  let min = (max = 1)
  let result = Math.max(...nums)

  for (let num of nums) {
    let temp = max * num
    max = Math.max(temp, min * num, num)
    min = Math.max(temp, min * num, num)

    result = Math.max(max, result)
  }

  return result
}

console.log(maxProductSubarry([2, 3, -2, 4]))
console.log(maxProductSubarry([-2, 0, -1]))
console.log(maxProductSubarry([0]))
