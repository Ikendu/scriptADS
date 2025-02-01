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
  push(value) {
    const newNode = new Node(value)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length++
    return this
  }
  pop() {
    if (this.head == null) {
      return null
    } else if (this.head == this.tail) {
      this.head = null
      this.tail = null
    } else {
      let temp = this.head
      let prev = this.head
      while (temp.next !== null) {
        prev = temp
        temp = temp.next
      }
      this.tail = prev
      this.tail.next = null
      this.length--
      return temp
    }
  }
}

let myLinkedList = new LinkedList(10)
myLinkedList.push(40)
console.log(myLinkedList.push(30))
console.log(myLinkedList.length)
