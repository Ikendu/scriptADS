// Sort Linked List using bubble sort

class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor(value) {
    let newNode = new Node(value)
    this.head = newNode
    this.length = 1
  }
  addNode(value) {
    let newNode = new Node(value)
    if (!this.head) {
      this.head = newNode
    } else {
      let temp = this.head
      while (temp.next) {
        temp = temp.next
      }
      temp.next = newNode
      this.length += 1
    }
    return this
  }

    sortList() {
      
  }
}

let myList = new LinkedList(50)
myList.addNode(20)
myList.addNode(30)
myList.addNode(10)
myList.addNode(40)
myList.sortList()
console.log(myList)
