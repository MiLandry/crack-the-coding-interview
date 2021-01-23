const cansum = require('./cansum');

// let ht

// beforeEach(() => {
//   ht = new HashTable()

// });

test('ieoa', () => {

  expect(cansum(7,[4,5,3,7,9]))
    .toBeTruthy()

    expect(cansum(7,[4,4]))
    .toBeFalsy()

    // expect(cansum(3,3))
    // .toEqual(6)


})
