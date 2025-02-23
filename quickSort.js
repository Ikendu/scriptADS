function swap(array, firstIdx, secondIdx) {
  let temp = array[firstIdx]
  array[firstIdx] = array[secondIdx]
  array[secondIdx] = temp
}

function pivot(arr, start = 0, end = arr.length - 1) {
  // We are assuming the pivot is always the first element
  // start is the index of the pivot
  let swapIdx = start

  for (let i = start + 1; i <= end; i++) {
    if (arr[i] < arr[start]) {
      swapIdx++
      swap(arr, swapIdx, i)
    }
  }
  swap(arr, start, swapIdx)
  return swapIdx
}

// console.log(pivot([3, 2, 6, 1, 7, 4]))

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let mid = pivot(arr, left, right)
    quickSort(arr, left, mid - 1)
    quickSort(arr, mid + 1, right)
  }

  return arr
}
console.log(quickSort([3, 2, 6, 1, 7, 4]))
