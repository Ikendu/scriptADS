function swap(array, firstIdx, secondIdx) {
  let temp = array[firstIdx]
  array[firstIdx] = array[secondIdx]
  array[secondIdx] = temp
}

function pivot(arr) {
  let pivotIdx = 0
  let length = arr.length - 1
  let swapIdx = pivotIdx

  for (let i = pivotIdx + 1; i <= length; i++) {
    if (arr[i] < arr[pivotIdx]) {
      swapIdx++
      swap(arr, swapIdx, i)
    }
  }
  swap(arr, pivotIdx, swapIdx)
  return swapIdx
}

console.log(pivot([3, 2, 6, 1, 7, 4]))
