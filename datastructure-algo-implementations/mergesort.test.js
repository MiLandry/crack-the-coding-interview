const mergeSort = require('./mergesort');



test('[]', () => {
  expect(mergeSort([]))
    .toEqual([])
})

test('[1,2,3]', () => {
  expect(mergeSort([1,2,3]))
    .toEqual([1,2,3])
})

test('[3,2,1]', () => {
  expect(mergeSort([3,2,1]))
    .toEqual([1,2,3])
})

test('[5,1,2,3]', () => {
  expect(mergeSort([5,1,2,3]))
    .toEqual([1,2,3,5])
})

test('[5,1,2,8,3]', () => {
  expect(mergeSort([5,1,2,8,3]))
    .toEqual([1,2,3,5,8])
})


test('[1,1,2,8,3]', () => {
  expect(mergeSort([1,1,2,8,3]))
    .toEqual([1,1,2,3,8])
})
