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

test('adds2', () => {
  ht.add('lorem','ipsum')
  expect(ht.array[3])
    .toEqual([['lorem', 'ipsum']])
})

test('lookup', () => {
  ht.add('lorem','ipsum')
  expect(ht.lookup('lorem'))
    .toEqual('ipsum')
})