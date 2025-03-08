function justWork(nums, k) {
  return nums.indexOf(k)
}
// Its either all numbers are sorted between the middle number M and the first number L
// if(nums[mid] >= nums[left])
// Or all numbers are sorted between After middle number M+1 and the last number R

// Not quite understood
function kAfterRotating(nums, k) {
  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    let mid = Math.floor((right + left) / 2)

    if (nums[mid] == k) {
      return mid
    } else if (nums[left] <= nums[mid]) {
      if (nums[left] <= k && nums[mid] >= k) {
        right = mid - 1
      } else {
        left = mid + 1
      }
    } else {
      if (nums[mid] <= k && nums[right] >= k) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    }
  }
  return -1
}

console.log(kAfterRotating([4, 5, 6, 7, 0, 1, 2], 0))
console.log(kAfterRotating([4, 5, 6, 7, 0, 1, 2], 3))
console.log(justWork([4, 5, 6, 7, 0, 1, 2], 0))
console.log(justWork([4, 5, 6, 7, 0, 1, 2], 3))
