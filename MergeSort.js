function merge(arr1, arr2) {
  let combined = []
  let i = 0
  let j = 0

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      combined.push(arr1[i])
      i++
    } else {
      combined.push(arr2[j])
      j++
    }
  }
  while (i < arr1.length) {
    combined.push(arr1[i])
    i++
  }
  while (j < arr2.length) {
    combined.push(arr2[j])
    j++
  }
  return combined
}

// console.log(merge([1, 2, 5, 8, 10], [3, 4, 12, 20, 22]))

function mergeSort(arr) {
  if (arr.length == 1) return arr

  let mid = Math.floor(arr.length / 2)
  let left = arr.slice(0, mid)
  let right = arr.slice(mid)

  return merge(mergeSort(left), mergeSort(right))
}

console.log(mergeSort([30, 3, 6, 10, 2, 20, 25]))
