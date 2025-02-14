// Remove duplicates from list

function removeduplicate(arr) {
  let mySet = new Set(arr)
  return Array.from(mySet)
}

console.log(removeduplicate([3, 5, 4, 3, 5, 2, 4, 3, 5]))

function uniqueElements(str) {
  let mySet = new Set(str)
  if (str.length !== mySet.size) return false
  return true
}
console.log(uniqueElements('helo'))

function uniqueElement(str) {
  let mySet = new Set()

  for (let i of str) {
    if (mySet.has(i)) {
      return false
    } else {
      mySet.add(i)
    }
  }
}
