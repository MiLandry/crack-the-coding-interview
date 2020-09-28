//this will sort an array of integers

//implement a get max func

const rs = function (arr)
{
  const max = Math.max(...arr)

  if (arr.length === 0|| arr.length === 1) return arr
  let temp = arr
  for (let i = 0; max > 10**i; i++)
  {
    temp = countingSort(temp, i + 1)


  }
  return temp
}

const countingSort = function (arr, digit)
{
  const count = Array(10).fill(0) //10 buckets to track digit count
  const cumulativeCount = []
  let startingIndex = []
  const result = []
  arr.forEach(element => {
    count[element % 10**digit]++ //fill buckets

  });


  //calculate cumulativeCount so we can calculate startingIndex
  cumulativeCount[0] = count[0]
  for (let i = 1; i < count.length; i++) {
    cumulativeCount[i] = count[i] + cumulativeCount[i-1]
  }

   //shift right
  cumulativeCount.pop()
  cumulativeCount.unshift(0)


  startingIndex = cumulativeCount

  //finally loop through the data and place the elements in the right place
  arr.forEach(element => {
    const indexToinsert = startingIndex[element % 10**digit]
    result[indexToinsert] = element
    startingIndex[element % 10**digit]++
  })

  return result


}

module.exports = rs;