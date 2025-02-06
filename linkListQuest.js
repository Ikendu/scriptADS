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

  nthFromBack(n) {
    let fast = this.head
    let slow = this.head
    let i = 0
    while (i < n) {
      if (fast == null) return false
      fast = fast.next
      i++
    }
    while (fast) {
      slow = slow.next
      fast = fast.next
    }
    return slow.value
  }
}

let list = new LinkedList(40)
list.push(50)
list.push(10)
console.log(list)
console.log(list.nthFromBack(5))
