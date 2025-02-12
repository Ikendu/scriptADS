// Find duplicate using object {}
function findDuplicate(arr) {
  let hash = {}
  let myArr = []
  for (let i = 0; i < arr.length; i++) {
    if (!hash[arr[i]]) hash[arr[i]] = 1
    else hash[arr[i]]++
  }

  for (let i in hash) {
    // console.log(hash[i])
    if (hash[i] > 1) myArr.push(i)
  }
  return myArr
}

console.log(findDuplicate([3, 5, 6, 3, 4, 6, 5]))

// Find duplicate using map [key, value]
function findMapDup(arr) {
  let hash = new Map()
  let result = []

  for (let num of arr) {
    if (hash.has(num)) hash.set(num, hash.get(num) + 1)
    else hash.set(num, 1)
  }

  for (let num of hash) {
    if (num[1] > 1) result.push(num[0])
  }

  return result
}

console.log(findMapDup([3, 5, 6, 3, 6, 4]))
