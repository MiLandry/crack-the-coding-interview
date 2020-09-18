//does a string have unique characters?

//just use a set

function uniqueChars(s)
{
  let set = new Set()
  for (c of s)
  {
    if (set.has(c)) return false
    set.add(c)
  }
  return true
}

module.exports = uniqueChars;

