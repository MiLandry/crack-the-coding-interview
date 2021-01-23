const canConstruct = require('./canConstruct');

// let ht

// beforeEach(() => {
//   ht = new HashTable()

// });

test('ieoa', () => {

  expect(canConstruct('foo',['f', 'e','o','a',]))
    .toBeTruthy()

    expect(canConstruct('bar',['r', 'e','o','ba',]))
    .toBeTruthy()

    expect(canConstruct('folo',['f','o','a',]))
    .toBeFalsy()


})
