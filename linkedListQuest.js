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
    let pre = this.head
    let temp = this.head
    while (temp.next) {
      pre = temp
      temp = temp.next
    }
    this.tail = pre
    this.tail.next = null
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
}

const linkedList = new LinkedList(20)
console.log(linkedList.push(10))
console.log(linkedList.push(30))
console.log(linkedList.push(50))
console.log('Mid Value', linkedList.pop())
