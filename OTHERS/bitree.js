class Node {
  constructor(value) {
    this.value = value
    this.right = null
    this.left = null
  }
}

class BinaryTree {
  constructor() {
    this.root = null
  }
  addNode(value) {
    let newNode = new Node(value)
    if (!this.root) {
      this.root = newNode
      return this
    } else {
      function cheackAdd(node) {
        if (value == node.value) return undefined
        if (value < node.value) {
          if (!node.left) {
            node.left = newNode
            return this
          }
          return cheackAdd(node.left)
        } else {
          if (!node.right) {
            node.right = newNode
            return this
          }
          return cheackAdd(node.right)
        }
      }
      cheackAdd(this.root)
    }
  }
}

let myTree = new BinaryTree()
myTree.addNode(50)
myTree.addNode(40)
myTree.addNode(60)
myTree.addNode(45)
myTree.addNode(65)
myTree.addNode(35)
myTree.addNode(55)
myTree.addNode(50)
console.log(myTree)
