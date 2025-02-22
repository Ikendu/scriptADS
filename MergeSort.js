function merge(arr1, arr2) {
  let combined = []
  let i = 0
  let j = 0

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      combined.push(arr1[i])
      i++
    } else {
      combined.push(arr2[j])
      j++
    }
  }
  while (i < arr1.length) {
    combined.push(arr1[i])
    i++
  }
  while (j < arr2.length) {
    combined.push(arr2[j])
    j++
  }
  return combined
}

// console.log(merge([1, 2, 5, 8, 10], [3, 4, 12, 20, 22]))

function mergeSort(arr) {
  if (arr.length == 1) return arr

  let mid = Math.floor(arr.length / 2)
  let left = arr.slice(0, mid)
  let right = arr.slice(mid)

  return merge(mergeSort(left), mergeSort(right))
}

// console.log(mergeSort([30, 3, 6, 10, 2, 20, 25]))

// MergeSort
// Questions
// Merge two sorted linked Lists
// .
// .

// Create the Node Class
class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

// Create The LinkedList Class
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
      return this
    } else {
      let curr = this.head
      curr.next = newNode
      this.length++
    }
  }
}

let myList = new LinkedList(13)
myList.addNode(30)
myList.addNode(40)
myList.addNode(44)
console.log(myList)
