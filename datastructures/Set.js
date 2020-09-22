
// two options, a hash table implementation, or a tree based implementation. This simple set will only accept strings. You can "cheat" using object primitive, we don't care
// about how to implement a hash table, just a set. Using built in Set would be cheating.

class MySet
{

  constructor(args)
  {
    this.data = {}
    if (!args) return
    for (const str of args)
    {
      this.data[str] = true
    }
  }



  add(str) {
    this.data[str] = true
  }
  has(str) {
    return this.data[str]
  }
  remove(str) {
    delete this.data[str]
  }




}

module.exports = MySet;