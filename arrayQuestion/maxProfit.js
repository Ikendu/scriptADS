function maxProfit(arr) {
  let buy = Math.min(...arr)
  let buyIndex = arr.indexOf(buy)
  let sale = Math.max(...arr.slice(buyIndex))

  //   console.log(sale, arr.slice(buyIndex))
  return sale - buy
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]))
console.log(maxProfit([5, 4, 3, 2, 1]))
console.log(maxProfit([2, 1, 4, 5, 2, 9, 7]))
console.log(maxProfit([1, 2, 3, 4, 5]))