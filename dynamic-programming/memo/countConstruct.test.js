const countConstruct = require('./countConstruct');

// let ht

// beforeEach(() => {
//   ht = new HashTable()

// });

test('ieoa', () => {

  expect(countConstruct('foo',['f', 'e','o','a',]))
    .toBe(1)

    expect(countConstruct('bar',['r', 'e','o','ba',]))
    .toBe(1)

    expect(countConstruct('folo',['f','o','a',]))
    .toBeFalsy()


})
