function changeCoin(coins, amount) {
  let dp = new Array(amount + 1).fill(amount + 1)
  dp[0] = 0

  for (let i = 1; i < amount + 1; i++) {
    for (let c of coins) {
      if (i - c >= 0) {
        dp[i] = Math.min(dp[i], 1 + dp[i - c])
      }
    }
    let result = dp[amount] != amount + 1 ? dp[amount] : -1
    return result
  }
}

console.log(changeCoin([1, 2, 3, 4, 5], 7))
