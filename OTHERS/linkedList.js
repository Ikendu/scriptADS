function LinkedList() {
  let length = 0
  let head = null

  function Node(value) {
    this.value = value
    this.next = null
  }

  this.isEmpty = function () {
    return length == 0
  }
  this.show = function () {
    let values = []
    while (head) {
      values.push(head.value)
      head = head.next
    }
    return values
  }

  this.addNode = function (element) {
    let newNode = new Node(element)

    if (head == null) {
      head = newNode
    } else {
      let currNode = head

      while (currNode.next) {
        currNode = currNode.next
      }
      currNode.next = newNode
    }
    length++
    return this
  }

  this.insert = function (element, index) {
    if (index > length) return false

    let newNode = new Node(element)
    let curr = head
    let prev
    let pos = 0

    if (index == 0) {
      newNode.next = curr
      head = newNode
    } else {
      while (pos < index) {
        pos++
        prev = curr
        curr = curr.next
      }
      newNode.next = curr
      prev.next = newNode
    }
    length++
  }
}

let myList = new LinkedList()
myList.addNode(9)
myList.addNode(19)
myList.addNode(10)
myList.insert('Hello', 1)
console.log(myList.isEmpty())
console.log(myList.show())
