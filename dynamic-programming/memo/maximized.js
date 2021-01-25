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
      const leftPartitionAddend = Math.min(...arr.slice(0,i))
      const remainingPartitionsAddend = maximized(arr.slice(i), k-1, memo)
      if (remainingPartitionsAddend !== null) {
        sums[i] = leftPartitionAddend + remainingPartitionsAddend
      }


    }
    memo[key] = Math.max(...sums.filter(e => e)) // filter removes nulls
    return memo[key]


}

module.exports = maximized

