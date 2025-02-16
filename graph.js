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
  addEdge(v1, v2) {
    if (this.obj[v1] && this.obj[v2]) {
      if (this.obj[v1].indexOf(v2) == -1) {
        this.obj[v1].push(v2)
        this.obj[v2].push(v1)
        return true
      }
      return false
    }

    return this
  }
  removeEdge(v1, v2) {
    if (this.obj[v1] && this.obj[v2]) {
      let index1 = this.obj[v1].indexOf(v2)
      let index2 = this.obj[v2].indexOf(v1)
      if (index1 > -1 && index2 > -1) {
        this.obj[v1].splice(index1, 1)
        this.obj[v2].splice(index2, 1)
        return true
      }
      return false
    }
  }
}

let mygraph = new Graph()
mygraph.addVertice('A')
mygraph.addVertice('B')
mygraph.addVertice('C')
mygraph.addEdge('A', 'B')
mygraph.addEdge('A', 'B')
// mygraph.removeEdge('A', 'B')
// console.log(mygraph.addVertice('C'))
console.log(mygraph)
