class Cookie {
  constructor(color) {
    this.cookie = color
  }
  shapeCooke(shape) {
    console.log(`This is a ${shape} cookie`)
    return shape + ' Done!'
  }
  getCookie() {
    return this.cookie
  }
  setCookie(color) {
    this.cookie = color
  }
}

let cookie1 = new Cookie('blue')
let cookie2 = new Cookie('brown')

console.log(cookie1.shapeCooke('Star'))
cookie2.setCookie('yellow')
console.log(cookie2.getCookie())
