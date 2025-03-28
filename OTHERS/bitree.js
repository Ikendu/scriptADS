// Binary Tree
class Node {
  constructor(value) {
    this.value = value
    this.right = null
    this.left = null
  }
}

class BinaryTree {
  constructor(value) {
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
    while (temp.right) {
      temp = temp.right
    }
    return temp.value
  }

  findMin() {
    let temp = this.root
    while (temp.left) {
      temp = temp.left
    }
    return temp.value
  }

  isPresent(value) {
    let curr = this.root

    while (curr) {
      if (value < curr.value) {
        curr = curr.left
      } else if (value > curr.value) {
        curr = curr.right
      } else if (value == curr.value) {
        return true
      }
    }
    return false
  }

  /**
   * Removes a node with the specified data from the binary tree.
   *
   * @param {*} data - The data of the node to be removed.
   * @description This method removes a node with the given data from the binary tree.
   * It handles different cases:
   * 1. If the node to be removed is a leaf node (no children), it's simply removed.
   * 2. If the node has only one child, that child replaces the node.
   * 3. If the node has two children, it finds the minimum value in the right subtree,
   *    replaces the node's value with this minimum, and then removes the minimum value
   *    node from the right subtree.
   * @returns {BinaryTree} The binary tree instance after removal.
   */
  remove(data) {
    function removeNode(node, data) {
      if (!node) return null
      if (data == node.data) {
        if (!node.left && !node.right) return null
        if (!node.left) return node.right
        if (!node.right) return node.left
        // if Node has two children
        // find the minimum value in the right subtree
        // replace the node's value with this minimum
        let tempNode = node.right
        while (tempNode.left) {
          tempNode = tempNode.left
        }
        node.value = tempNode.value
        node.right = removeNode(node.right, tempNode.value)
        return node
      } else if (data < node.data) {
        node.left = removeNode(node.left, data)
        return node
      } else {
        node.right = removeNode(node.right, data)
        return node
      }
    }
    this.root = removeNode(this.root, data)
  }

  findMinLength(node = this.root) {
    if (!node) return -1
    let left = this.findMinLength(node.left)
    let right = this.findMinLength(node.right)

    if (left < right) {
      return left + 1
    }
    return right + 1
  }
  findMaxLength(node = this.root) {
    if (!node) return -1
    let left = this.findMaxLength(node.left)
    let right = this.findMaxLength(node.right)
    if (left > right) {
      return left + 1
    }
    return right + 1
  }
  isBalance() {
    return this.findMaxLength() - this.findMinLength() <= 1
  }

  breathFirst() {
    if (!this.root) return null
    let currNode = this.root
    let queue = []
    let result = []

    queue.push(currNode)
    while (queue.length) {
      currNode = queue.shift()
      result.push(currNode.value)
      if (currNode.left) queue.push(currNode.left)
      if (currNode.right) queue.push(currNode.right)
    }
    return result
  }

  inOrder() {
    if (this.root == null) return null
    let result = []

    function traverse(node) {
      node.left && traverse(node.left)
      result.push(node.value)
      node.right && traverse(node.right)
    }
    traverse(this.root)
    return result
  }

  postOrder() {
    if (this.root == null) return null
    let currNode = this.root
    let result = []

    function traverse(node) {
      node.left && traverse(node.left)
      node.right && traverse(node.right)
      result.push(node.value)
    }
    traverse(this.root)
    return result
  }

  preorder() {
    if (!this.root) return null
    let currNode = this.root
    let result = []

    function preorder(node) {
      result.push(node.value)
      node.left && preorder(node.left)
      node.right && preorder(node.right)
    }
    preorder(this.root)
    return result
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
// myTree.remove(40)

// console.log(myTree.findMax())
// console.log(myTree.findMin())
// console.log(myTree.isPresent(6))
myTree.remove(50)
myTree.remove(40)
console.log(myTree)
console.log(myTree.findMaxLength())
console.log(myTree.findMinLength())
console.log(myTree.breathFirst())
console.log(myTree.inOrder())
console.log(myTree.postOrder())
console.log(myTree.preorder())

let aTree = new BinaryTree()

// aTree.addMoreNode(100)
// aTree.addMoreNode(50)
// aTree.addMoreNode(150)
// aTree.addMoreNode(60)
// aTree.addMoreNode(140)
// aTree.addMoreNode(160)
// aTree.addMoreNode(40)
// console.log(aTree)
// console.log(aTree.findMax())
// console.log(aTree.findMin())

// console.log(null + 1 + 1)
