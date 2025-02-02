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
  // add in front of list
  unshift(value) {
    let newNode = new Node(value)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.next = this.head
      this.head = newNode
    }
    this.length++
    return this
  }
  shift() {
    if (!this.head) return undefined
    let temp = this.head
    this.head = this.head.next
    temp.next = null
    this.length--
    if (length == 0) this.tail = null
    return this
  }
}

let myLinkedList = new LinkedList(10)
myLinkedList.push(40)
myLinkedList.push(30)
myLinkedList.length
// myLinkedList.pop()
myLinkedList.unshift(100)
console.log(myLinkedList)
