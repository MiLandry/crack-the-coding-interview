//this will use an Adjacency List
//save yourself trouble by using numbers as we always use an array to store
/*
+------+                +---------+
|      |                |         |
|   0  +----------------+     1   +----+
|      |                |         |    |
+--+---+               ++--+------+    |
   |                   |   |           |
   |                   |   |           +-------+---------+
   |                   |   |                   |         |
   |      +------------+   |                   |         |
   |      |                |                   |    2    |
   |      |                |       +-----------+         |
   |      |                |       |           +---------+
+-----+------+--+             |       |
|               |        +----+-------+
|               |        |            |
|               |        |            |
|      4        +--------+     3      |
|               |        |            |
|               |        |            |
+---------------+        +------------+
*/



class UndirectedGraph
{
  constructor(vertexCount) {
    const arr = new Array(vertexCount)
    for (let i = 0; i < vertexCount; i++)
    {
      arr[i] = []
    }
    console.log('arr', arr)
    this.graph = arr
    // this.addEdge = this.addEdge.bind(this)


  }

  addEdge(n1,n2)
  {
    // console.log('this.graph', this.graph)
    // console.log('this.graph[0]', this.graph[0])
    // this.graph[0].push('1')
    this.graph[n1].push(n2)
    this.graph[n2].push(n1)


  }

}

const g1 = new UndirectedGraph(5)

g1.addEdge(0,1)
g1.addEdge(0,4)
g1.addEdge(4,1)
g1.addEdge(4,3)
g1.addEdge(1,3)
g1.addEdge(2,1)
g1.addEdge(2,3)

module.exports = g1

