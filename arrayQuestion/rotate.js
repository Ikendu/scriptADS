function rotata(arr, k) {
  if (k > 0) {
    for (let i = 0; i < k; i++) {
      let last = arr.pop()
      arr.unshift(last)
    }
  } else {
    for (let i = 0; i < Math.abs(k); i++) {
      let first = arr.shift()
      arr.push(first)
    }
  }

  return arr
}

console.log(rotata([1, 2, 3, 4, 5], 1))
console.log(rotata([1, 2, 3], 3))
console.log(rotata([4, 3, 2, 1], 0))
console.log(rotata([5, 6, 7, 8], -1))
