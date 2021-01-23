//you did this the hard way,
// the easy way is also the unintuitive way: you want to add the current cell you are on to its neighbors (IE you push your numbers) instead of calculating what the value of the current cell should be (IE PULL the numbers)


const grid = (m,n) => {
  let table = new Array(m).fill(null)//.fill(new Array(n).fill(0))
  table = table.map(e => {
    return new Array(n).fill(0)
  })
  table[0][0] = 1


  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {

      if (!(i === 0 && j === 0)) {

        const lowerNeighbor = i ? table[i-1][j] : 0
        const rightNeigbor = j ? table[i][j-1] : 0
        table[i][j] = lowerNeighbor + rightNeigbor
      }
    }
  }
  console.log('table', table)

  return table[m-1][n-1]






}

grid(2,2)

module.exports = grid

