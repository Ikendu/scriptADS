class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Queue {
  constructor(value) {
    let newNode = new Node(value)
    this.first = newNode
    this.last = newNode
    this.length++
  }

  enqueue(value) {
    let newNode = new Node(value)
    if (!this.first) {
      this.first = newNode
      this.last = newNode
    }
    //   let temp = this.last
    this.last.next = newNode
    this.last = newNode

    return this
  }

  dequeue() {
    if (!this.top) return undefined
    let temp = this.top

    this.top = this.top.next
    temp.next = null
    this.length--

    return temp
  }
}

let myQueue = new Queue(1)
myQueue.enqueue(3)
myQueue.enqueue(5)
console.log(myQueue)
