//its a recursive implementation, so solve the base case
function mergeSort (arr)
{

  if (arr.length === 0 || arr.length === 1) return arr
  const result = []
  const half = Math.ceil(arr.length / 2);
  const leftP = mergeSort(arr.splice(0, half))
  const rightP = mergeSort(arr)

  while (leftP.length || rightP.length)
  {
    if(leftP.length===0) {
      result.push(...rightP)
      break
    }
    if(rightP.length===0) {
      result.push(...leftP)
      break
    }
    const smaller = (leftP[0] < rightP[0])  ? leftP.shift() : rightP.shift()
    result.push(smaller)
  }
  return result
}

// console.log('test', mergeSort([3,2,1,5]))

module.exports = mergeSort;