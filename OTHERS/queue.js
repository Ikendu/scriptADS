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
  this.items = function () {
    return this.store
  }
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
    if (this.store.length == 0) {
      this.store.push(element)
      return
    }
    let checker = 0

    for (let i = 0; i < this.store.length; i++) {
      if (element[1] < this.store[i][1]) {
        this.store.splice(i, 0, element)
        checker = 1
        break
      }
    }
    if (checker == 0) {
      this.store.push(element)
    }
  }
}

let pq = new PriorityQueue()
pq.enqueue(['a', 2])
pq.enqueue(['b', 3])
pq.enqueue(['c', 1])
pq.enqueue(['d', 4])
console.log(pq.store)
