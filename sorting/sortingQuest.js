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

  sortListBubble() {
    if (this.length < 2) return this

    let temp = this.head

    while (temp.next) {
      let currentNode = temp
      let nextNode = currentNode.next

      while (nextNode) {
        if (currentNode.value > nextNode.value) {
          let holder = currentNode.value
          currentNode.value = nextNode.value
          nextNode.value = holder
        }
        nextNode = nextNode.next
      }
      temp = temp.next
    }
    return this
  }

  sortListSelect() {
    if (this.length < 2) return this

    let curr = this.head

    while (curr.next) {
      let smallest = curr
      let nextNode = smallest.next

      while (nextNode) {
        if (smallest.value > nextNode.value) {
          smallest = nextNode
        }
        nextNode = nextNode.next
      }
      if (smallest !== curr) {
        let holder = smallest.value
        smallest.value = curr.value
        curr.value = holder
      }
      curr = curr.next
    }
    return this
  }
}

let myList = new LinkedList(50)
myList.addNode(20)
myList.addNode(30)
myList.addNode(10)
myList.addNode(40)
myList.sortListSelect()
console.log(myList)
