class Node {
  constructor(value) {
    this.value = value
    this.next = null
    this.prev = null
  }
}

class DoublyLinked {
  constructor(value) {
    let newNode = new Node(value)
    this.head = newNode
    this.tail = this.head
    this.length = 1
  }
  push(value) {
    let newNode = new Node(value)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
    }
    this.length++
    return this
  }
  pop() {
    if (!this.head) return
    let temp = this.tail
    if (!this.head.next) {
      this.head = null
      this.tail = null
    } else {
      this.tail = this.tail.prev
      this.tail.next = null
      temp.prev = null
    }
    this.length--
    return temp
  }
  unshift(value) {
    let newNode = new Node(value)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.head.prev = newNode
      newNode.next = this.head
      this.head = newNode
    }
    this.length++
    return this
  }

  shift() {
    if (!this.head) return
    let temp = this.head
    if (this.length == 1) {
      this.head == null
      this.tail == null
    } else {
      this.head = this.head.next
      this.head.prev = null
      temp.next = null
    }
    this.length--
    return temp
  }
//   get(index) {
//     if (!this.head) return
//     let temp = this.head
//     if (index < this.length / 2) {
//       for (let i = 0; i < index; i++) {
//         temp = temp.next
//       }
//     } else {
//       let temp = this.tail
//       for (let i = this.length - 1; i > 0; i++) {
//         temp = this.tail.prev
//       }
//     }
//     return temp
//   }
// }

let myList = new DoublyLinked(5)
myList.push(2)
// myList.push(4)
// myList.push(8)
// console.log(myList)
// console.log(myList.pop())
// console.log(myList.unshift(7))
// console.log(myList.shift())
console.log(myList.get(2))
