function minimumCostClimbing(costs) {
  let cost1 = costs[0]
  let cost2 = costs[1]

  for (let i = 2; i < costs.length; i++) {
    minCost = costs[i] + Math.min(cost1, cost2)
    cost1 = cost2
    cost2 = minCost
  }

  return Math.min(cost1, cost2)
}

console.log(minimumCostClimbing([10, 15, 20]))
console.log(minimumCostClimbing([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]))

function minCostClimb(costs) {
  costs.push(0)

  for (let i = costs.length - 4; i >= 0; i--) {
    costs[i] += Math.min(costs[i + 2], costs[i + 1])
  }

  return Math.min(costs[0], costs[1])
}

console.log(minCostClimb([10, 15, 20]))
console.log(minCostClimb([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]))
