class Stack {
  constructor() {
    this.stackList = []
    this.length = 0
  }
  push(value) {
    this.stackList.push(value)
    this.length++
    return this.stack
  }
  remove() {
    if (this.isEmpty) return null
    this.stackList.pop()
    this.length--
  }
  peek() {
    return this.stackList[this.length - 1]
  }
  size() {
    return this.stackList.length
  }
  isEmpty() {
    return this.stackList.length - 1 === 0
  }
}

let myStack = new Stack(5)
myStack.push(1)
myStack.push(3)
myStack.push(5)
// myStack.remove()
console.log(myStack.peek())
console.log(myStack)
console.log(myStack.size())
console.log(myStack.isEmpty())

function reverseStr(str) {
  let newArr = []
  let char = [...str]

  for (let i = 0; i < str.length; i++) {
    newArr.push(char.pop())
  }
  return newArr.join('')
}

console.log(reverseStr('hello'))

function isBalanced(str) {
  str = [...str]
  let newPar = ''
  let opo = ''

  for (let i of str) {
    if (i == '(' || i == '{' || i == '[') {
      newPar += i
    } else {
      opo += i
    }
  }
  console.log(newPar)
  console.log(opo)
  return newPar.length === opo.length
}

console.log(isBalanced('{{{}}}{}[]{[}]'))

// function sortArr(arr) {
//   let newArr = []

//   while (arr.length > 0) {
//     let temp = arr.pop()

//     while (newArr.length > 0 && newArr[newArr.length - 1] > temp) {
//       arr.push(newArr.pop())
//     }

//     newArr.push(temp)
//   }

//   return newArr
// }
// console.log(sortArr([5, 1, 3, 4, 0]))

function sortInOrder(arr) {
  let newArr = []

  while (arr.length > 0) {
    let temp = arr.pop()

    while (newArr.length > 0 && newArr[newArr.length - 1] > temp) {
      arr.push(newArr.pop())
    }
    newArr.push(temp)
  }
  return newArr
}
console.log(sortInOrder([5, 1, 3, 4, 0, 6]))
