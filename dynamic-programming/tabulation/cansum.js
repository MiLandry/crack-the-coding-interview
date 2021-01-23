



const cansum = (s, arr) => {
  const table = new Array(s + 1).fill(false)

  table[0] = true

  for (let [index, e] of table.entries()) {
    if (e) {
      for (const n of arr) {
        if (index + n < table.length) {

          table[index + n ] = true
        }

      }

    }

  }
  console.log('table', table)

  return table[s]

}

cansum(7, [7,3,5,7])

cansum(7,[4,5,3,7,9])


module.exports = cansum

