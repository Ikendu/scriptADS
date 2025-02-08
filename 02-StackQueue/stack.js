class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Stack {
  constructor(value) {
    let newNode = new Node(value)
    this.top = newNode
    this.length = 1
  }

  // ADD TO THE TOP OF THE STACK
  unshift(value) {
    let newNode = new Node(value)

    if (!this.top) {
      this.top = newNode
    } else {
      newNode.next = this.top
      this.top = newNode
    }
    this.length++

    return this
  }

  // REMOVE FROM THE LIST
  shift() {
    if (!this.top) return undefined

    let temp = this.top
    this.top = this.top.next
    temp.next = null
    this.length--

    return temp
  }
}

const myStack = new Stack(10)

myStack.unshift(20)
myStack.unshift(7)
myStack.unshift(9)
// console.log(myStack)
console.log(myStack.shift())
