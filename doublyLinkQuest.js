// SWAP NODE
class Node {
  constructor(value) {
    this.value = value
    this.next = null
    this.prev = null
  }
}

class DoublyLinkedList {
  constructor(value) {
    const newNode = new Node(value)
    this.head = newNode
    this.tail = newNode
    this.length = 1
  }

  //PUSH METHOD FOR TESTING
  push(value) {
    let newNode = new Node(value)

    if (!this.head) {
      this.head = newNode
      this.tail = this.head
    } else {
      this.tail.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
    }

    this.length++
    return this
  }

  swapFirstLast() {
    if (!this.head || this.head == this.tail) return
    let value = this.head.value
    this.head.value = this.tail.value
    this.tail.value = value

    return this
  }

  reverseNode() {
    if (!this.head) return null

    let temp = this.head
    this.head = this.tail
    this.tail = temp
    temp = null
    let curr = this.head

    while (curr) {
      temp = curr.prev
      curr.prev = curr.next
      curr.next = temp
      curr = curr.prev
    }
  }
}

let myList = new DoublyLinkedList(10)
myList.push(5)
myList.push(20)
myList.push(7)
// myList.swapFirstLast()
myList.reverseNode()
console.log(myList)
