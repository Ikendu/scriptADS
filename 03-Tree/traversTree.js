class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BST {
  constructor() {
    this.root = null
  }

  addNode(value) {
    let newNode = new Node(value)
    if (this.root == null) {
      this.root = newNode
      return this
    }
    let currNode = this.root

    while (true) {
      if (newNode.value === currNode.value) return undefined
      if (value < currNode.value) {
        if (!currNode.left) {
          currNode.left = newNode
          return this
        }

        currNode = currNode.left
      } else {
        if (!currNode.right) {
          currNode.right = newNode
          return this
        }
        currNode = currNode.right
      }
    }
  }
  breadthFirst() {
    if (!this.root) return undefined
    let queue = []
    let result = []
    let currNode = this.root

    queue.push(currNode)

    while (queue.length) {
      currNode = queue.shift()
      result.push(currNode.value)
      if (currNode.left) queue.push(currNode.left)
      if (currNode.right) queue.push(currNode.right)
    }
    return result
  }
}

let myTree = new BST()
myTree.addNode(50)
myTree.addNode(40)
myTree.addNode(10)
myTree.addNode(70)
myTree.addNode(65)

console.log(myTree)
console.log(myTree.breadthFirst())
