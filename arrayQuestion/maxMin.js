// 

function maxmin(arr) {
  let max = -Infinity
  let min = Infinity
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i]
    if (arr[i] < min) min = arr[i]
  }
  return [max, min]
}

console.log(maxmin([30, 10, 5, 20, 10]))
