function MySet() {
  this.length = 0
  let values = []

  this.has = (value) => {
    return values.indexOf(value) > -1
  }
}

let setA = new MySet()

console.log(setA)
