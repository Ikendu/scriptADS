function longestString(arr) {
  let longest = ''

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longest.length) {
      longest = arr[i]
    }
  }
  return longest
}
console.log(longestString(['orag', 'cherr', 'banana']))

// Wrong
// function longest(arr) {
//   let longest = ''
//   for (let str of arr) {
//     longest = Math.max(longest.length, str.length)
//   }
//   return longest
// }

console.log(longest(['orag', 'cherr', 'banana']))

function longestStr(arr) {
  let longest = ''
  for (str of arr) {
    longest = longest.length > str.length ? longest : str
  }
  return longest
}

console.log(longestStr(['orag', 'cherr', 'banana', 'tomatoes']))
