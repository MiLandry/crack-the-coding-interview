

class Stack
{
  constructor()
  {
    this.data = []

  }

  push(e)
  {
    this.data.push(e)
  }

  pop()
  {
    return this.data.pop()
  }



}

module.exports = Stack;