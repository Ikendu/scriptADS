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
