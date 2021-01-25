// Given an array a of size N and an integer K, the task is to divide the array into K segments such that sum of the minimum of K segments is maximized.

const sumArray = arr => arr.reduce((a, b) => a + b, 0);

const maximized = (arr, k, memo = {}) => {
  const key = arr.toString() + 'k' + k.toString()
  if (key in memo) return memo[key]

  if (n === 1){
    memo[key] = arr[0]
    return memo[key]
    }
  if (k === n){
    memo[key] = sumArray(arr)
    return memo[key]
    }
  if (k > n ){
    memo[key] = null
    return memo[key]
    }
  if (k === 0){
    memo[key] = 0
    return memo[key]
    }
  if (k === 1){
    memo[key] = Math.min(...arr)
    return memo[key]
    }

    const sums = new Array(n).fill(null)
    for (let i = 1; i < n; i++) {
      const leftPartition = Math.min(...arr.slice(0,i))
      const rightPartition = maximized(arr.slice(i), k-1)
      if (rightPartition !== null) {
        sums[i] = leftPartition + rightPartition
      }


    }
    memo[key] = Math.max(...sums.filter(e => e))
    return memo[key]


}

console.log(maximized([6, 5, 3, 8, 9, 10, 4, 7, 10], 4))

module.exports = maximized

