const binarySearch = require('./binarySearch');



// test('', () => {
//   expect(binarySearch([], 42))
//     .toEqual(-1)
// })

// test('', () => {
//   expect(binarySearch([1], 1))
//     .toEqual(0)
// })

// test('', () => {
//   expect(binarySearch([1], 2))
//     .toEqual(-1)
// })

// test('', () => {
//   expect(binarySearch([1,2], 1))
//     .toEqual(0)
// })

// test('', () => {
//   expect(binarySearch([1,2], 2))
//     .toEqual(1)
// })

// test('', () => {
//   expect(binarySearch([1,2,3], 1))
//     .toEqual(0)
// })

// test('', () => {
//   expect(binarySearch([1,2,3], 1))
//     .toEqual(0)
// })

// test('', () => {
//   expect(binarySearch([1,2,3], 2))
//     .toEqual(1)
// })

test('', () => {
  expect(binarySearch([1,2,3], 3))
    .toEqual(2)
})

test('', () => {
  expect(binarySearch([1,2,3,4], 2))
    .toEqual(1)
})

test('', () => {
  expect(binarySearch([1,2,3,4], 3))
    .toEqual(2)
})

test('', () => {
  expect(binarySearch([1,2,3,4], 4))
    .toEqual(3)
})


// test('', () => {
//   expect(binarySearch([1,2,3,4,7,10,11], 4))
//     .toEqual(3)
// })