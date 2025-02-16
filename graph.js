class Graph {
  constructor() {
    this.obj = {}
  }

  addVertice(vertice) {
    if (!this.obj[vertice]) {
      this.obj[vertice] = []
      return true
    }
    return false
  }
}

let mygraph = new Graph()
mygraph.addVertice('A')
mygraph.addVertice('B')
mygraph.addVertice('C')
console.log(mygraph.addVertice('C'))
console.log(mygraph)
