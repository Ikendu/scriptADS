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

// Find non-Reapting character using {}
function findNonRepeating(str) {
  let obj = {}
  let result = ''

  for (let cha of str) {
    if (obj[cha]) obj[cha]++
    else obj[cha] = 1
  }

  for (let a in obj) {
    if (obj[a] <= 1) {
      result += a
    }
  }
  return result
}

console.log(findNonRepeating('aasshttk'))

// Find Non-Repeating characters Using map
function nonRepeatMap(str) {
  let myMap = new Map()
  let single = []
  for (let char of str) {
    myMap.set(char, (myMap.get(char) || 0) + 1)
  }
  console.log(myMap)

  for (let char of myMap) {
    if (char[1] == 1) single.push(char[0])
  }
  return single
}

console.log(nonRepeatMap('sskkfffyjjsa'))

function anagramGroup(arr) {
  let mymap = new Map()

  for (let word of arr) {
    let sorted = word.split('').sort().join('')

    if (mymap.has(sorted)) {
      mymap.get(sorted).push(word)
    } else {
      mymap.set(sorted, [word])
    }
  }
  let result = Array.from(mymap.values())
  return result
}
console.log(
  anagramGroup(['love', 'vole', 'elvo', 'money', 'nomey', 'car', 'rac', 'arc', 'rich', 'chir'])
)

// anagram solution with {}
function anagramObj(arr) {
  let obj = {}

  for (let word of arr) {
    let sorted = word.split('').sort().join('')

    if (obj[sorted]) {
      obj[sorted].push(word)
    } else {
      obj[sorted] = [word]
    }
  }
  let result = Object.values(obj)
  return result
}

console.log(
  'OBJ',
  anagramObj(['love', 'vole', 'elvo', 'money', 'nomey', 'car', 'rac', 'arc', 'rich', 'chir'])
)

function twoSum(arr, num) {
  let obj = {}

  for (let i = 0; i < arr.length; i++) {
    let sub = num - arr[i]
    obj[i] = [arr[i], sub]
  }
  for (let i in obj) {
    if (obj[i][0] + obj[i][1] == num) {
      let index = arr.indexOf(obj[i][1])
      i = Number(i)
      if (index !== i && index > -1) return [i, index]
    }
  }
  return []
}

console.log(twoSum([2, 7, 11, 15], 9))
console.log(twoSum([3, 2, 4, 3, 2, 5], 7))
