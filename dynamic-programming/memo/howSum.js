




const howSum = (s, arr, memo = {}) => {
  // const key = s+'|' + arr.join()
  if (s in memo) {
    return memo[s]
  }

  for (let n of arr) {

    if ( n === s) {
      memo[s] = [n]
      return [n]
    }
    const diff = s - n
    if ( diff > 0) {
      const subresult = (howSum(diff, arr, memo))
      if (subresult) {
        subresult.unshift(n)
        memo[s] = subresult
        return subresult
      }
    }
  }
  memo[s] = null
  return null
}



module.exports = howSum

