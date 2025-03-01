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
    return true
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
    return true
  }

  this.remove = function (element) {
    if (head == null) return undefined
    let temp = head
    let prev
    let count = 0

    if (element == head.value) {
      head = head.next
      temp.next = null
      length--
      return temp
    }

    while (count < length && temp.value !== element) {
      prev = temp
      temp = temp.next
      count++
    }
    if (count < length && temp.value === element) {
      prev.next = temp.next
      temp.next = null
      length--
      return temp
    }
    return undefined
  }

  this.shortRemove = function (element) {
    if (!head) return undefined
    let curr = head
    let count = 0
    let prev
    if (head.value == element) {
      head = curr.next
    } else {
      while (count < length && element !== curr.value) {
        prev = curr
        curr = curr.next
        count++
      }
      if (count < length) prev.next = curr.next
    }
    length--
    return undefined
  }

  this.elementAt = function (index) {
    if (index > length || index < 0) return undefined
    let count = 0
    let curr = head

    while (count < index) {
      curr = curr.next
      count++
    }
    return curr.value
  }
}

let myList = new LinkedList()
myList.addNode(9)
myList.addNode(19)
myList.addNode(10)
myList.addNode(50)
myList.insert('Hello', 1)
// console.log(myList.remove(100))
console.log(myList.elementAt(3))
console.log(myList.isEmpty())
console.log(myList.show())
