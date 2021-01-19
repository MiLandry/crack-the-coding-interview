
const _ = require('lodash');


// Given two string X and Y. The task is to find the length of longest subsequence of string X which is substring in sequence Y.
// aka LCS problem

//for DP: figure out the base case / recursive solution / divide and conquer / subproblem structure.

//Now you have to figure out how to avoid solving duplicate subproblems more than one, two choices:

// use top-down (memoization), flows easily from recursive strat
// use bottom up (tabular), meaning first you calcuate / build a table of solutions to subproblems, then you solve the main problem by consulting the table.



//
//memoization approach?

// bottom down approach ?
const memo = {}

const lcsRecursive = (a,b) => {
  if (a.length === 0) return 0
  if (b.length === 0) return 0
  if (_.last(a) === _.last(b)) {

    return 1 + lcsRecursive(a.slice(0,-1), b.slice(0,-1))
  }
  return Math.max(lcsRecursive(a,b.slice(0,-1)), lcsRecursive(a.slice(0,-1),b))

}

// this problem does not lend itself to memoization top down, or not with js. Use lodash or bottom up.
// "ABCDGH", "AEDFHR"
const table = []
const lcsBottomUp = (a,b) => {
//store A as column
//store b as rows
  const myArr = [...b].map(x => 0)
  myArr.push(0)
  table.push(myArr)
  for (charA in a) {
    const arr = new Array(b.length + 1)
    arr[0] = 0
     table.push(arr)
  }
  debugger

  for (let [indexA, charA] of [...a].entries()) {

    for (let [indexB, charB] of [...b].entries()) {
      const maxSubproblem = Math.max(table[indexA][indexB + 1], table[indexA + 1][indexB])
      table[indexA + 1][indexB + 1] = charA === charB
        ? 1 + maxSubproblem
        :  maxSubproblem

    }
  }
  return table[a.length][b.length]

}


// module.exports = _.memoize(lcsRecursive)
module.exports =lcsBottomUp
