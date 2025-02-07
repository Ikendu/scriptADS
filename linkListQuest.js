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

  partionList(num) {
    if (this.head == null) return
    if (this.head.next == null) return this.head

    let holder1 = new Node(0)
    let holder2 = new Node(0)
    let pre1 = holder1
    let pre2 = holder2
    let curr = this.head

    while (curr) {
      if (curr.value < num) {
        pre1.next = curr
        pre1 = curr
      } else {
        pre2.next = curr
        pre2 = curr
      }
      curr = curr.next
    }
    pre2.next = null
    pre1.next = holder2.next
    this.head = holder1.next
    return this.head
  }

  // REMOVE DUPLICATE
  removeDuplicate() {
    if (!this.head) return
    let temp = this.head
    let prev = null
    let mySet = new Set()

    while (temp) {
      if (mySet.has(temp.value)) {
        prev.next = temp.next
      } else {
        mySet.add(temp.value)
        prev = temp
      }
      temp = temp.next
    }
    return this.head
  }

  // BINARY TO DECIMAL
  binaryToDeciaml() {
    if (!this.head) return
    let sum = 0
    let temp = this.head
    while (temp) {
      sum = sum * 2 + temp.value
      temp = temp.next
    }
    return sum
  }

  reverseBetween(m, n) {
    if (this.head == null) return
    let temp = this.head
    let prev = this.head
    let length = 0
    let first

    while (temp.next) {
      if (length != m) {
        prev = prev.next
        temp = temp.next
        length++
      } else {
        while (n != 0) temp = temp.next
        first = temp
        first.next = prev
        prev = first
        n--
      }
    }
    return this.head
  }
}

let list = new LinkedList(1)
list.push(0)
list.push(1)
list.push(1)
list.push(3)
list.push(20)
list.push(2)
console.log(list)
// console.log(list.nthFromBack(2))
// console.log(list.partionList(5))
// console.log(list.removeDuplicate())
console.log(list.binaryToDeciaml())
console.log(list.reverseBetween(2, 4))
