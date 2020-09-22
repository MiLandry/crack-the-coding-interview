const MySet = require('./Set');

let set

beforeEach(() => {

set = new MySet()
});

test('it adds', () => {
  set.add('a')
  expect(set)
    .toMatchSnapshot()

})

test('it adds 2', () => {
  set.add('a')
  set.add('a')
  expect(set)
    .toMatchSnapshot()

})

test('it adds 2 different', () => {
  set.add('a')
  set.add('b')
  expect(set)
    .toMatchSnapshot()

})

test('has', () => {
  set.add('a')
  set.add('b')
  expect(set.has('a'))
  .toBeTruthy()
})

test('has', () => {
  set.add('a')
  set.add('b')
  expect(set.has('z'))
  .toBeFalsy()
})

test('remove', () => {
  set.add('a')
  set.add('b')
  set.remove('a')
  expect(set)
  .toMatchSnapshot()
})

