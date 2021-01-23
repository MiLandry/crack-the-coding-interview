const canConstruct = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target]
  if (target === '') return true;

  for (const word of wordBank) {
    if (word === target) return true

    if (word.length < target.length) {
      if (target.substring(0, word.length) === word) {// only take prefixes, you can't create subproblem by removing substrings from the middle because you create 'new adjacencies' that way.
        const newTarget = target.replace(word, '')
        memo[target] = canConstruct(newTarget, wordBank, memo)
        return memo[target]
      }
    }
  }
  return false
}


module.exports = canConstruct

