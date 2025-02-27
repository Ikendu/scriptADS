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

  //Add node using while(true)

  addMoreNode(value) {
    if (!this.root) {
      this.root = new Node(value)
      return this
    } else {
      let temp = this.root

      while (true) {
        if (value == temp.value) return undefined
        if (value < temp.value) {
          if (temp.left == null) {
            temp.left = new Node(value)
            return this
          }
          temp = temp.left
        } else {
          if (temp.right == null) {
            temp.right = new Node(value)
            return this
          }
          temp = temp.right
        }
      }
    }
  }
  findMax() {
    let temp = this.root
    while (temp.left) {
      temp = temp.left
    }
    return temp.value
  }

  findMin() {
    let temp = this.root
    while (temp.right) {
      temp = temp.right
    }
    return temp.value
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
console.log(myTree.findMax())
console.log(myTree.findMin())
let aTree = new BinaryTree()
aTree.addMoreNode(100)
aTree.addMoreNode(50)
aTree.addMoreNode(150)
aTree.addMoreNode(60)
aTree.addMoreNode(140)
aTree.addMoreNode(160)
aTree.addMoreNode(40)
console.log(aTree)
console.log(aTree.findMax())
console.log(aTree.findMin())
