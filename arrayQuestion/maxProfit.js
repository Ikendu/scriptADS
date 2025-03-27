// A function that calculate the maximum profit
// that can be gotten from an array of elements
// It should produce the max - min
// The max should be in the future of the min

function maxProfit(arr) {
  let buy = Math.min(...arr)
  let buyIndex = arr.indexOf(buy)
  let sale = Math.max(...arr.slice(buyIndex))

  //   console.log(sale, arr.slice(buyIndex))
  return sale - buy
}

function maxProf(nums) {
  let min = Infinity
  let result = 0

  for (let cur of nums) {
    min = Math.min(cur, min)
    let prof = cur - min
    result = Math.max(prof, result)
  }
  return result
}

console.log(maxProf([5, 2, 4, 3, 6, 1, 7]))

// console.log(maxProfit([7, 1, 5, 3, 6, 4]))
// console.log(maxProfit([5, 2, 4, 3, 6, 1]))
// console.log(maxProfit([2, 1, 4, 5, 2, 9, 7]))
// console.log(maxProfit([1, 2, 3, 4, 5]))

function maxProfit2(arr) {
  let min = Number.MAX_VALUE
  let maxProfit = 0

  for (let i = 0; i < arr.length; i++) {
    min = Math.min(arr[i], min)
    let profit = arr[i] - min
    maxProfit = Math.max(profit, maxProfit)
  }
  return maxProfit
}

// console.log(maxProfit2([7, 1, 5, 3, 6, 4]))
// console.log(maxProfit2([5, 4, 3, 2, 1]))
// console.log(maxProfit2([2, 1, 4, 5, 2, 9, 7]))
// console.log(maxProfit2([1, 2, 3, 4, 5]))
