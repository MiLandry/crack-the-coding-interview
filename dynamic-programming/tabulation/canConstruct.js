const canConstruct = (target, wordBank) => {
  const table = new Array(target.length + 1).fill(false)
  table[0] = true

  for (let [index, value] of table.entries()) {
    if (value) {
      for (const word of wordBank) {
        console.log('word', word)
        if (target.indexOf(word) === 0) {
          
        }



      }
    }

  }

  for (const char of target) {
    console.log('char', char)
  }




}

canConstruct('foo',['f', 'e','o','a',])


module.exports = canConstruct

