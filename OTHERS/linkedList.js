function List() {
  let length = 0
  let head = null

  function Node(value) {
    this.value = value
    this.next = null
  }

  function isEmpty() {
    return this.length == 0
  }

  function addNode(element) {
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
    return this
  }
}
