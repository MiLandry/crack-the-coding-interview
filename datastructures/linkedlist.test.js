const LinkedList = require('./linkedlist');

let ll

beforeEach(() => {
  ll = new LinkedList()
  ll.add('a')
  ll.add('b')
  ll.add('c')

});

test('it adds', () => {
  expect(ll.head)
    .toMatchSnapshot()
})

test('it reads', () => {
  expect(ll.read(0))
  .toEqual('a')
})

test('it reads', () => {
  expect(ll.read(1))
  .toEqual('b')
})

test('it reads', () => {
  expect(ll.read(2))
  .toEqual('c')
})


test('it removes', () => {
  ll.remove(0)
  expect(ll.head)
    .toMatchSnapshot()
})


test('it removes 2', () => {
  ll.remove(1)
  expect(ll.head)
    .toMatchSnapshot()
})

test('it removes 3', () => {
  ll.remove(2)
  expect(ll.head)
    .toMatchSnapshot()
})
