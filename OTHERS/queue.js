function Queue() {
  this.store = []
  this.length = 0

  this.add = function (value) {
    this.store.push(value)
    this.length++
  }
  this.remove = function () {
    this.store.shift()
    this.length--
  }
  this.peek = function () {
    return this.store[0]
  }
  this.items = function () {}
}

let myQueue = new Queue()
myQueue.add(10)
myQueue.add(20)
myQueue.add(40)
console.log(myQueue.store)
console.log(myQueue.peek())
console.log(myQueue.length)
