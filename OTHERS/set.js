function MySet() {
  this.length = 0
  this.values = []

  this.has = (value) => {
    return this.values.indexOf(value) > -1
  }

  this.add = (value) => {
    if (!this.has(value)) {
      this.values.push(value)
    }
  }

  this.remove = (value) => {
    if (this.has(value)) {
      let idx = this.values.indexOf(value)
      this.values.splice(idx, 1)
    }
  }

  this.items = () => {
    return this.values
  }

  this.union = (otherSet) => {
    let union = new MySet()
    let myset = this.values
    let newset = otherSet.values

    myset.forEach((e) => {
      union.add(e)
    })
    newset.forEach((e) => {
      union.add(e)
    })

    return union
  }

  this.intersection = (otherSet) => {
    let intersect = new MySet()

    this.values.forEach((e) => {
      otherSet.has(e) && intersect.add(e)
    })
    return intersect
  }

  this.difference = (otherSet) => {
    let diff = new MySet()

    this.values.forEach((e) => {
      !otherSet.has(e) && diff.add(e)
    })
    return diff
  }
}

let setA = new MySet()
setA.add(10)
setA.add(50)
setA.add(20)

let setB = new MySet()
setB.add(30)
setB.add(40)
setB.add(10)
console.log(setA.has(10))
console.log(setA.items())
console.log(setA.union(setB).items())
console.log(setA.intersection(setB).items())
console.log(setA.difference(setB).items())
