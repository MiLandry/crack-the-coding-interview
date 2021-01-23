const countConstruct = (target, wordBank) => {
  if (target === '') return 1

  let result = 0
  for (const word of wordBank) {
    if (word.length <= target.length) {
      if (target.substring(0, word.length) === word) {// only take prefixes, you can't create subproblem by removing substrings from the middle because you create 'new adjacencies' that way.

        const newTarget = target.replace(word, '')
        result = result + countConstruct(newTarget, wordBank)

      }
    }
  }

  return result

}

//TODO memoize


module.exports = countConstruct

