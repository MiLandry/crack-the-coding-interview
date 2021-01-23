const grid = require('./grid');

// let ht

// beforeEach(() => {
//   ht = new HashTable()

// });

test('ieoa', () => {

  expect(grid(1,1))
    .toEqual(1)

    expect(grid(2,2))
    .toEqual(2)

    expect(grid(3,3))
    .toEqual(6)


})
