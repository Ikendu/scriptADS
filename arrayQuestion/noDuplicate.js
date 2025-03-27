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
// return the number of duplicate
function nodup(arr) {
  let count = 0
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      arr[count] = arr[i]
      count++
    }
  }
  return count
}

console.log(nodup([4, 4, 5, 29, 29, 'hello', 'hello']))

// count the number of duplicate element and return it
function nodup1(arr) {
  let myset = new Set(arr)

  return arr.length - myset.size
}

console.log(nodup([4, 4, 5, 29, 29, 'hello', 'hello']))
