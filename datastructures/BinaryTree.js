

class Tree {
  constructor(data) {
    this.data = data
  }

  setData(data)
  {
    this.data = data
  }
  getData()
  {
    return this.data
  }

  setLeft(tree)
  {
    this.left = tree
  }
  getLeft()
  {
    return this.left
  }

  setRight(tree)
  {
    this.right = tree
  }
  getRight()
  {
    return this.right
  }
}