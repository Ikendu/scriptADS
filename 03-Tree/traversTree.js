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
  depthFirstPreOrder() {
    let result = []
    function traverse(currNode) {
      result.push(currNode.value)
      if (currNode.left) traverse(currNode.left)
      if (currNode.right) traverse(currNode.right)
    }
    traverse(this.root)
    return result
  }

  depthFirstPostOrder() {
    if (!this.root) return undefined
    let result = []

    function traverse(currNode) {
      if (currNode.left) traverse(currNode.left)
      if (currNode.right) traverse(currNode.right)
      result.push(currNode.value)
    }
    traverse(this.root)
    return result
  }
  depthFirstInOrder() {
    if (!this.root) return null

    let result = []
    let currNode = this.root

    function traverse(currNode) {
      if (currNode.left) traverse(currNode.left)
      result.push(currNode.value)
      if (currNode.right) traverse(currNode.right)
    }
      traverse(this.root)
      return result
  }
}

let myTree = new BST()
myTree.addNode(50)
myTree.addNode(40)
myTree.addNode(10)
myTree.addNode(70)
myTree.addNode(65)
myTree.addNode(45)
myTree.addNode(75)

console.log(myTree)
console.log(myTree.breadthFirst())
console.log(myTree.depthFirstPreOrder())
console.log(myTree.depthFirstPostOrder())
console.log(myTree.depthFirstInOrder())
