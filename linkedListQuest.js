class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}
class LinkedList {
  constructor(value) {
    const newNode = new Node(value)
    this.head = newNode
    this.tail = this.head
    this.length = 1
  }
  getMidValue() {
    let slow = this.head
    let fast = this.head
    while (fast.next && fast.next.next) {
      slow = slow.next
      fast = fast.next.next
    }
  }
}
