// function maxContainer(container) {
//   let left = 0
//   let right = container.length - 1
//   let area = 0

//   while (left < right) {
//     let curr = (right - left) * Math.min(container[left], container[right])
//     area = Math.max(area, curr)

//     if (container[left] < container[right]) left++
//     else right--
//   }

//   return area
// }

function maxContain(areas) {
  let left = 0
  let right = areas.length - 1
  let result = 0

  while (left < right) {
    let cur = (right - left) * Math.min(areas[left], areas[right])
    result = Math.max(cur, result)

    if (areas[left] < areas[right]) {
      left++
    } else {
      right--
    }
  }

  return result
}
console.log(maxContain([1, 8, 6, 2, 5, 4, 8, 3, 7]))
console.log(maxContain([1, 1]))
