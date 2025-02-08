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
    if (!this.head) return undefined
    let prev = this.head
    let temp = this.head
    while (temp.next) {
      prev = temp
      temp = temp.next
    }
    this.tail = prev
    this.tail.next = null
    return temp
  }

  shift() {
    if (!this.head) return false
    let temp = this.head
    this.head = this.head.next
    temp.next = null
    if (this.length == 0) {
      this.tail = null
    }
    return temp
  }

  getMidValue() {
    let slow = this.head
    let fast = this.head
    while (fast && fast.next) {
      slow = slow.next
      fast = fast.next.next
    }
    return slow
  }

  getAllValues() {
    let myValues = []
    while (this.head.next) {
      myValues.push(this.head.value)
    }
  }

  unshift(value) {
    const newNode = new Node(value)
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
  get(index) {
    if (this.head == null) return undefined
    if (index < 0 || index >= this.length) return undefined
    let temp = this.head
    for (let i = 0; i < index; i++) {
      temp = temp.next
    }
    return temp
  }
  set(index, value) {
    let posNode = this.get(index)
    posNode.value = value
    return this
  }

  insert(index, value) {
    if (index == 0) return this.unshift(value)
    if (index == this.length) return this.push(value)
    if (index < 0 || index > this.length) return false

    let newNode = new Node(value)
    let posNode = this.get(index - 1)
    newNode.next = posNode.next
    posNode.next = newNode
    this.length++

    return true
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined
    if (index == 0) return this.shift()
    if (index == this.length) return this.pop()
    let posNode = this.get(index)
    let temp = posNode.next
    posNode.next = temp.next
    temp.next = null
    this.length--
    return temp
  }

  reverse() {
    let temp = this.head
    this.head = this.tail
    this.tail = temp

    let prev = null
    let next = temp.next

    for (let i = 0; i < this.length; i++) {
      next = temp.next
      temp.next = prev
      prev = temp
      temp = next
    }
    return this
  }
}

const linkedList = new LinkedList(20)
console.log(linkedList.push(10))
console.log(linkedList.push(30))
console.log(linkedList.push(50))
// console.log('Mid Value', linkedList.pop())
console.log(linkedList.unshift(60))
console.log(linkedList.get(3))
console.log(linkedList.set(4, 500))
console.log(linkedList.insert(5, 200))
// console.log(linkedList.remove(3))
console.log(linkedList.reverse())
