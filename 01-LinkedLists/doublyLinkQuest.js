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

  pallindrome() {
    if (this.length <= 1) return true

    let front = this.head
    let back = this.tail

    for (let i = 0; i < Math.floor(this.length / 2); i++) {
      if (front.value !== back.value) return false
      front = front.next
      back = back.prev
    }
    return true
  }

  // swapTwo() {
  //   if (!this.head) return undefined
  //   let temp = this.head
  //   let after = temp.next

  //   while (temp) {
  //     let holder = temp
  //     temp = after
  //     after = holder
  //     temp = temp.next.next
  //   }
  //   return this
  // }
}

let myList = new DoublyLinkedList('a')
myList.push('s')
myList.push('d')
// myList.push('s')
myList.push('s')
myList.push('a')
// myList.swapFirstLast()
// myList.reverseNode()

// console.log(myList)
// console.log(myList.pallindrome())
console.log(myList.swapTwo())
