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
    this.tail = newNode
    this.length = 1
    return this
  }

  // add new node at the end of the list
  push(value) {
    const newNode = new Node(value)
    if (!this.head) {
      this.head = newNode
      this.tail = this.head.next
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length++
    return this
  }

  checkLoop() {
    let fast = this.head
    let slow = this.head
    while (fast && fast.next) {
      fast = fast.next.next
      slow = slow.next
      if (fast == slow) {
        return true
      }
      }
      
  }

  checkLoop() {
    let fast = this.head
    let slow = this.head

    while (fast.next) {
      fast = fast.next.next
      slow = slow.next
      if (fast == slow) {
        return true
      }
    }
    return false
  }
}

let list = new LinkedList(40)
list.push(50)
list.push(10)
console.log(list)
