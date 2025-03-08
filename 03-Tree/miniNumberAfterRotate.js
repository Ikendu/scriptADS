function minimumAfterRotate(nums) {
  return Math.min(...nums)
}

function minimumAfterRotate2(nums) {
  let left = 0
  let right = nums.length - 1
  let mid

  while (left < right) {
    mid = Math.floor((right + left) / 2)

    if (nums[right] >= nums[mid]) {
      right = mid
    } else {
      left = mid + 1
    }
  }

  return nums[left]
}

console.log(minimumAfterRotate([3, 4, 5, 1, 2]))
console.log(minimumAfterRotate2([4, 5, 6, 7, 0, 1, 2]))
