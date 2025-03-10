// find all the three combinations of numbers in an array that sums up to zero
// without repetition of combinations

function threesums(nums) {
  let result = []
  nums = nums.sort((a, b) => a - b)

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == nums[i - 1] && i == 0) continue
    let l = i + 1
    let r = nums.length - 1

    while (l < r) {
      let total = nums[i] + nums[l] + nums[r]

      if (total > 0) r--
      else if (total < 0) l++
      else {
        result.push([nums[i], nums[l], nums[r]])
        l++
        while (l < r && nums[l] !== nums[l - 1]) {
          l++
        }
      }
    }
  }
  return result
}

console.log(threesums([-1, 0, 1, 2, -1, -4]))
