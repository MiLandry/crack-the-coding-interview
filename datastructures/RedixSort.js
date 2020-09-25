//this will sort an array of integers

//implement a get max func

const rs = function (arr)
{
  const max = Math.max(arr)

  if (arr.length === 0|| arr.length === 1) return arr
  let temp = arr
  for (let i = 0; max > 10**1; i++)
  {
    temp = countingSort(temp, i + 1)


  }
  return temp
}

const countingSort = function (arr, digit)
{
  const count = Array(10).fill(0) //10 buckets to track digit count
  const cumulativeCount
  const startingIndex
  const result
  for (const e in arr)
  {
    count[e % 10**digit]++ //fill buckets
  }

  //calculate cumulativeCount so we can calculate startingIndex
  for (let i = 0; i < count.length; i++) {
    cumulativeCount[i] = count[i] + count[i-1]
  }

  cumulativeCount.unshift(0).pop() //shift right
  startingIndex = cumulativeCount

  //finally loop through the data and place the elements in the right place
  for (const e in arr)
  {
    const indexToinsert = startingIndex[e % 10**digit]
    result[indexToinsert] = e
    startingIndex[e % 10**digit]++
  }

  return result


}

module.exports = LinkedList;