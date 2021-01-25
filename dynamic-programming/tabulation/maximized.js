// Given an array a of size N and an integer K, the task is to divide the array into K segments such that sum of the minimum of K segments is maximized.



const sumArray = arr => arr.reduce((a, b) => a + b, 0);

const maximized = (arr, k) => {
  const n = arr.length
  if (k === 1) return Math.min(...arr)
  if (k === 0) return null
  if (k > n) return null //you can't have more partitions than elements in array
  if (n === 1) return arr[0]
  if (k === n) return sumArray(...arr)

  const table = []
  const firstRow = new Array(n).fill(null)

  for (let i = n-1; i >= 0; i--) {
    firstRow[i] = Math.min(...arr.slice(i,n))
  }


  table.push([])
  table.push(firstRow)

  let partitionCount = 2
  // start incrementing the number of segments
  // for each segment caclulate every sum whenever we try to place a partition

  while (partitionCount <= k) {
    const row = new Array(n).fill(0)

    for (let i = n-1; i >= 0; i--) {
      const newLength = n - i
      if (newLength < partitionCount) {
        row[i] = null
      } else if (newLength === partitionCount) {
        row[i] = sumArray(arr.slice(i))
      }
      else {

        const leftCandidatePartition = arr[i]
        const remainingSum = table[partitionCount-1][i + 1]
        const sum = leftCandidatePartition + remainingSum
        row[i] = sum
      }
    }
      partitionCount++

    table[partitionCount-1] = row

  }

  return table[k][0]

}

maximized([4, 7, 10], 2)
//maximized([6, 5, 3, 8, 9, 10, 4, 7, 10], 4)

module.exports = maximized

