let Stack = function () {
  this.store = {}
  this.length = 0

  this.push = (value) => {
    this.store[this.length] = value
    this.length++
  }

  this.pop = () => {
    if (this.length == 0) {
      return undefined
    }
    this.length--
    let result = this.store[this.length]
    delete this.store[this.length]
    return result
  }

  this.peek = () => {
    return this.store[this.length - 1]
  }

  this.items = () => {
    return this.store
  }
}

let myStack = new Stack()
myStack.push(10)
myStack.push(20)
myStack.push(30)
myStack.pop()
myStack.pop()
myStack.pop()
myStack.pop()
console.log(myStack.peek())
console.log(myStack)
