const howSum = require('./howSum');

// let ht

// beforeEach(() => {
//   ht = new HashTable()

// });

test('it finds the sum', () => {

  expect(howSum(7,[4,3]))
    .toStrictEqual([4,3])

    expect(howSum(7,[2,4]))
    .toBeNull()

    const expected = howSum(17,[4,14,3])

    expect(expected)
    .toStrictEqual([ 4, 4, 3, 3, 3 ])

})
