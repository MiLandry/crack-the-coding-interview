

class Queue
{
  constructor()
  {
    this.data = []

  }

  enqueue(e)
  {
    this.data.push(e)
  }

  dequeue()
  {
    return this.data.shift()
  }



}

module.exports = Queue;