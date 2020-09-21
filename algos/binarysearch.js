// a simple binary search takes a sorted array and a target and returns the index of the target, or -1 otherwise
// assume that arr is a sorted array



//spoiler, use divide and conquer
function binarySearch (arr, target)
{
  if (arr.length === 0) return -1
  if (arr.length === 1)
  {
    if (arr[0] === target) return 0
    return -1
  }

  const halfway = Math.floor(arr.length / 2)
  const median = arr[halfway]
  if (median === target) return halfway
  if ( target < median){
    const newArr = arr.slice(0,halfway)
    return binarySearch(newArr, target)
  }


  if ( target > median) return binarySearch(arr.slice(halfway), target) + halfway


}



module.exports = binarySearch;