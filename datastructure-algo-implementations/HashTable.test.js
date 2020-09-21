const HashTable = require('./HashTable');

let ht

beforeEach(() => {
  ht = new HashTable()

});

test('it adds', () => {
  ht.add('foo','bar')
  expect(ht.array[4])
    .toEqual([['foo', 'bar']])
})
