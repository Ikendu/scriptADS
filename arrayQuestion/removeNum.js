function removeItem(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == num) {
      let temp = arr[0]
      arr[0] = arr[i]
      arr[i] = temp
      arr.shift()
    }
  }
  return arr
}

console.log(removeItem([30, 10, 20, 30, 3, 30], 30))

function removeNum(arr, num) {
  let j = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== num) {
      j++
    }
  }
  return j
}

console.log(removeNum([30, 10, 20, 30, 3, 30], 30))
