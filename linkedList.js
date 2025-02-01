// Create Node

class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

const node1 = new Node(10)

// Create Singly Linked List
class LinkedList {
  constructor(value) {
    const newNode = new Node(value)
    this.head = newNode
    this.tail = this.head
    this.length = 1
  }
}
let myLinkedList = new LinkedList(10)
console.log(myLinkedList.length)
