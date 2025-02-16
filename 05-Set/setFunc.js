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

function findPairs(arr1, arr2, num) {
  let obj = {}
  let result = []

  for (let i = 0; i < arr1.length; i++) {
    obj[num - arr1[i]] = arr1[i]
  }

  for (let i = 0; i < arr2.length; i++) {
    if (obj[arr2[i]]) {
      result.push([obj[arr2[i]], arr2[i]])
    }
  }

  return result
}

console.log(findPairs([1, 2, 3], [4, 5, 6], 7))

function longestConsecutiveString(arr) {
  let mySet = new Set(arr)
  let sum = 0

  for (let num of mySet) {
    let currNum = num
    let currSum = 1

    while (mySet.has(currNum + 1)) {
      currNum++
      currSum++
    }
    sum = Math.max(sum, currSum)
  }
  return sum
}
console.log(longestConsecutiveString([9, 1, 3, 10, 10, 2, 11, 12, 20, 3, 21]))
