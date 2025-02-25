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

// let myQueue = new Queue()
// myQueue.add(10)
// myQueue.add(20)
// myQueue.add(40)
// console.log(myQueue.store)
// console.log(myQueue.peek())
// console.log(myQueue.length)

function PriorityQueue() {
  this.store = []

  this.enqueue = function (element) {
    if (!this.store.length) {
      this.store.push(element)
    }
    let checker = 0

    for (let i = 0; i < this.store.length; i++) {
      if (element[1] < this.store[i][1]) {
        this.store.splice(i, 0, element)
        checker = 1
      }
    }
    if (checker == 0) {
      this.store.push(element)
    }
    }
    
    
}
