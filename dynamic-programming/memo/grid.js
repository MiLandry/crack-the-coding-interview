const memo = {}
// memo['0,0'] = 0
// memo['1,1'] = 1


const grid = (m,n) => {
  const key = m + ',' + n
  if (key in memo) return memo[key]

  if (m === 0) {
    memo[key] = 0
    return 0
  }

  if (n === 0) {
    memo[key] = 0
    return 0
  }

  if (m === 1) {
    memo[key] = 1
    return 1
  }

  if (n === 1) {
    memo[key] = 1
    return 1
  }
  memo[key] = grid(m, n-1) + grid(m-1,n)
  return memo[key]


}



module.exports = grid

