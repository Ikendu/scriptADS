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

/**
 * Function to calculate the minimum number of coins needed to make up a given amount.
 * Uses dynamic programming to solve the problem efficiently.
 *
 * @param {number[]} coins - An array of coin denominations available.
 * @param {number} amount - The target amount to achieve using the coins.
 * @returns {number} - The minimum number of coins needed to make up the amount,
 *                     or -1 if it is not possible to make up the amount.
 */
function changeCoin(coins, amount) {
  // Initialize a DP array with size (amount + 1) and fill it with a large value (amount + 1).
  // This represents the minimum coins needed for each amount from 0 to 'amount'.
  let dp = new Array(amount + 1).fill(amount + 1)

  // Base case: To make amount 0, 0 coins are needed.
  dp[0] = 0

  // Iterate through all amounts from 1 to 'amount'.
  for (let i = 1; i < amount + 1; i++) {
    // Check each coin denomination.
    for (let c of coins) {
      // If the current amount (i) is greater than or equal to the coin value (c),
      // update the DP array with the minimum coins needed.
      if (i - c >= 0) {
        dp[i] = Math.min(dp[i], 1 + dp[i - c])
      }
    }

    // The result is determined by checking if the value at dp[amount] is still the initial large value.
    // If it is, return -1 (not possible to make the amount). Otherwise, return dp[amount].
    let result = dp[amount] != amount + 1 ? dp[amount] : -1

    // BUG: The return statement here is inside the loop, causing the function to exit prematurely.
    return result
  }
}

// Example usage: Calculate the minimum coins needed to make amount 7 with coins [1, 2, 3, 4, 5].

// Key Notes:
// Bug in the Code: The return result statement is inside the outer for loop. This causes the function to return prematurely after processing only the first iteration of the loop. To fix this, the return result statement should be moved outside the loop.
// Dynamic Programming Approach: The function uses a bottom-up dynamic programming approach to calculate the minimum number of coins needed for each amount up to the target amount.
// Edge Cases: The function assumes that the coins array and amount are valid inputs. You may want to add input validation for robustness.
console.log(changeCoin([1, 2, 3, 4, 5], 7))
