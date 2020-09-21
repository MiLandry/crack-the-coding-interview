

class HashTable
{
  constructor(size)
  {
    this.array = new Array(size || 10)
  }

  hash(str, max)
  {
    let result = 0

    for (let index = 0; index < str.length; index++)
    {
      result = result + str.charCodeAt(index)
    }


    return result % max
  }

  add(key, value)
  {
    const index = this.hash(key, this.array.length)
    let bucket = this.array[index]
    //if the bucket is empty, add the key value pair.
    if (!bucket)
    {
      this.array[index] = [[key,value]]
    }

    else
    {
      let keyAlreadyExists = false
      for (const pair of bucket)
      {
        // if the bucket contains this key already, override its value
        if (pair[0] === key)
        {
          pair[1] = value
          keyAlreadyExists = true
          break
        }
      }
      if (!keyAlreadyExists)
      {
        bucket.add([key,value])
      }
    }
  }

  lookup(key)
  {
    const index = this.hash(key, this.array.length)
    const bucket = this.array[index]
    for (const pair of bucket)
    {
      if (pair[0] === key) return bucket[0][1]
    }
    return null
  }

}

module.exports = HashTable;