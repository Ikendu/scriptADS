// find all the three combinations of numbers in an array that sums up to zero
// without repetition of combinations

let mymuns = [-1, 0, 1, 2, -1, -4]

// function threesums(nums) {
//   let result = []
//   nums = nums.sort((a, b) => a - b)

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] == nums[i - 1] && i == 0) continue
//     let l = i + 1
//     let r = nums.length - 1

//     while (l < r) {
//       let total = nums[i] + nums[l] + nums[r]

//       if (total > 0) r--
//       else if (total < 0) l++
//       else {
//         result.push([nums[i], nums[l], nums[r]])
//         l++
//         while (l < r && nums[l] !== nums[l - 1]) {
//           l++
//         }
//       }
//     }
//   }
//   return result
// }
// [-4, -1, -1, 0, 1, 2]

function threesums(arr) {
  arr = arr.sort()
  let result = []

  for (let i = 0; i < arr.length; i++) {
    if (i != 0 && arr[i] == arr[i - 1]) continue
    let l = i + 1
    let r = arr.length - 1

    while (l < r) {
      let sum = arr[i] + arr[l] + arr[r]
      if (sum > 0) r--
      else if (sum < 0) l++
      else {
        result.push([arr[i], arr[l], arr[r]])
        l++
        while (l < r && arr[l] == arr[l - 1]) {
          l++
        }
      }
    }
  }
  return result
}
console.log(threesums([-1, 0, 1, 2, -1, -4]))

// time complexity O(nlogn * n*n) = O(n*n)
// O(1)
