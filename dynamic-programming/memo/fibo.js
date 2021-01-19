const memo = {}
memo[1] = 1
memo[2] = 1



const fibo = n => {
  if (n ===1) return 1
  if (n ===2) return 1
  if (memo[n]) return memo[n]

  memo[n] = fibo(n-1) + fibo(n-2)
  return memo[n]

}



module.exports = fibo

