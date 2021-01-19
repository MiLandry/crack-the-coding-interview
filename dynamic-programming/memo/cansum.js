const memo = {}




const cansum = (s, arr) => {
  const key = s+'|' + arr.join()

  if (key in memo) {
    if (memo[key]) return true
  }

  if (s === 0) {
    memo[key] = true
    return memo[key]
  }

  if (arr.length === 0) {
    memo[key] = false
    return memo[key]
  }

  if (arr.length === 1) {
    memo[key] = s === arr[0]
    return memo[key]
  }

  for(var i =0; i < arr.length; i++) {
    const e = arr[i]


    if (e === s) {
      memo[key] = true
      return true
    }

    if (e < s) {
      const newArr = [...arr]
      delete newArr[i]
      memo[key] = cansum(s-e, newArr)
      if (memo[key]) return true
    }
  }

  return false

}



module.exports = cansum

