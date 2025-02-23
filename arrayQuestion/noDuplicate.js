function noduplicate(arr) {
  let myset = new Set()

  for (let i = 0; i < arr.length; i++) {
    if (!myset.has(arr[i])) {
      myset.add(arr[i])
    }
  }
  return Array.from(myset)
}

console.log(noduplicate([4, 5, 29, 'hello', 'hello', 29, 4]))

// For Sorted Array
function nodup(arr) {
  let count = 1
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      arr[count] = arr[i]
      count++
    }
  }
  //   console.log(arr.slice(0, count))
  return count
}

console.log(nodup([4, 4, 5, 29, 29, 'hello', 'hello']))
