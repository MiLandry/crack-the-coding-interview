//account for the head pointer
// you MUST implement like this... There is a lot going on...
// each element is called a node by convention
// the payload is called data by convention
// the pointer, by convention, is called next.


class LinkedListNode
{
  constructor(data)
  {
    this.data = data
    this.next = null

  }
}

class LinkedList
{
  constructor() {
    this.head = null
  }

  add(element)
  {
    const newNode = new LinkedListNode(element)
    if (this.head === null)
    {
      this.head = newNode

    }
    else
    {

      let currentNode = this.head

      while (currentNode.next)
      {
        currentNode = currentNode.next
      }

      currentNode.next = newNode
    }
  }

  remove(index){
    if (index === 0) {
      this.head = this.head.next
      return
    }

    let previousNode
    let nodeToRemove = this.head
    let nextNode
    for (let i = 0; i < index; i++) {
      previousNode = nodeToRemove
      nodeToRemove = nodeToRemove.next

    }

    if (!nodeToRemove.next) //last element
    {
      previousNode.next = null
    }
    else
    {
      previousNode.next = nodeToRemove.next
    }
  }

  read(index){
    let nodeToRead = this.head
    for (let i = 0; i < index; i++) {
      nodeToRead = nodeToRead.next

    }
    return nodeToRead.data
  }
}

module.exports = LinkedList;