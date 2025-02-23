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
      this.length = 1
      return this
    } else {
      let curr = this.head
      while (curr.next) {
        curr = curr.next
      }
      curr.next = newNode
      this.length++
    }
    return this
  }

  // merge(otherList) {
  //   let newList = new Node(0)
  //   let otherHead = otherList.head
  //   let myList = this.head
  //   let combined = newList

  //   while (myList && otherHead) {
  //     if (myList.value < otherHead.value) {
  //       combined.next = myList
  //       myList = myList.next
  //     } else {
  //       combined.next = otherHead
  //       otherHead = otherHead.next
  //     }
  //     combined = combined.next
  //   }
  //   if (myList) {
  //     combined.next = myList
  //   } else {
  //     combined.next = otherHead
  //   }
  //   this.head = newList.next
  //   this.length += otherList.length
  // }

  merges(otherList) {
    let newList = { value: 0, next: null }
    let combined = newList
    let otherHead = otherList.head
    let curr = this.head

    while (curr && otherHead) {
      if (curr.value < otherHead.value) {
        combined.next = curr
        curr = curr.next
      } else {
        combined.next = otherHead
        otherHead = otherHead.next
      }
      combined = combined.next
    }
    if (curr) {
      combined.next = curr
    } else {
      combined.next = otherHead
    }
    this.head = newList.next
    this.length += otherList.length
  }
}

function merge(list1, list2) {
  let head1 = list1.head
  let head2 = list2.head
  let newList = { value: 0, next: null }
  let combined = newList

  while (head1 && head2) {
    if (head1.value < head2.value) {
      combined.next = head1
      head1 = head1.next
    } else {
      combined.next = head2
      head2 = head2.next
    }
    combined = combined.next
  }
  if (head1) {
    combined.next = head1
  } else {
    combined.next = head2
  }
  let length = list1.length + list2.length
  console.log({ length })
  return newList.next
}

let objList1 = {
  head: { value: 12, next: { value: 20, next: { value: 51, next: null } } },
  length: 4,
}
let objList2 = {
  head: { value: 15, next: { value: 21, next: { value: 55, next: null } } },
  length: 4,
}

let myList = new LinkedList(13)
let aList = new LinkedList(5)
myList.addNode(30)
myList.addNode(40)
myList.addNode(44)
aList.addNode(15)
aList.addNode(20)
aList.addNode(50)
myList.merges(objList1)
console.log(myList)

console.log(merge(objList1, objList2))
