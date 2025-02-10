class Node {
  constructor(value) {
    this.value = value
    this.right = null
    this.left = null
  }
}

class BinaryST {
  constructor() {
    this.root = null
  }
  insert(value) {
    let newNode = new Node(value)
    if (this.root === null) {
      this.root = newNode
      return this
    }
    let temp = this.root

    while (true) {
      if (newNode.value === temp.value) return undefined
      if (newNode.value < temp.value) {
        if (temp.left == null) {
          temp.left = newNode
          return this
        }
        temp = temp.left
      } else {
        if (temp.right == null) {
          temp.right = newNode
          return this
        }
        temp = temp.right
      }
    }
  }
  contains(value) {
    if (this.root == null) return false
    let temp = this.root
    while (temp) {
      if (value < temp.value) {
        temp = temp.left
      } else if (value > temp.value) {
        temp = temp.right
      } else {
        return true
      }
    }
    return false
  }

  minValueNode(currNode) {
    while (currNode.left) {
      currNode = currNode.left
    }
    return currNode
  }

  maxValueNode(currNode) {
    while (currNode.right) {
      currNode = currNode.right
    }
    return currNode
  }
}

let myTree = new BinaryST()

myTree.insert(10)
myTree.insert(20)
myTree.insert(5)
myTree.insert(4)
myTree.insert(40)

console.log(myTree)
console.log(myTree.contains(40))
console.log(myTree.minValueNode(myTree.root))
console.log(myTree.maxValueNode(myTree.root))
