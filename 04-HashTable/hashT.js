class HashTable {
  constructor(size = 7) {
    this.datamap = new Array(size)
  }
  _hash(prop) {
    let hash = 0
    for (let i = 0; i < prop.length; i++) {
      hash = (hash + prop.charCodeAt(i) * 23) % this.datamap.length
    }
    return hash
  }

  set(key, value) {
    let index = this._hash(key)
    // console.log(index)

    if (!this.datamap[index]) {
      this.datamap[index] = []
    }
    this.datamap[index].push([key, value])
    return this
  }

  get(key) {
    let index = this._hash(key)
    console.log(index)
    if (this.datamap[index]) {
      for (let i = 0; i < this.datamap[index].length; i++) {
        if (this.datamap[index][i][0] === key) {
          return this.datamap[index][i][1]
        }
      }
      return undefined
    }
  }

  keys() {
    let keyArr = []

    for (let i = 0; i < this.datamap.length; i++) {
      if (this.datamap[i]) {
        for (let j = 0; j < this.datamap[i].length; j++) {
          keyArr.push(this.datamap[i][j][0])
        }
      }
    }
    return keyArr
  }
}

let myHash = new HashTable(10)

myHash.set('hello', 20)
myHash.set('helle', 10)
myHash.set('come', 30)

console.log(myHash.get('helle'))
console.log(myHash.keys())
// console.log(myHash)

function findItem(arr1, arr2) {
  let obj = {}

  for (let i = 0; i < arr1.length; i++) {
    obj[arr1[i]] = true
  }
  for (let j = 0; j < arr2.length; j++) {
    if (obj[arr2[j]]) return true
  }

  return false
}

console.log(findItem([20, 10, 40], [13, 10, 15]))
