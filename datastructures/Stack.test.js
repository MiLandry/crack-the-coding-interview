const Stack = require('./Stack');

let stack

beforeEach(() => {

stack = new Stack()
});

test('it adds', () => {
  stack.push('a')
  stack.push('b')
  stack.push('c')
  stack.push('d')
  expect(stack)
    .toMatchSnapshot()

})

test('it pops', () => {
  stack.push('a')
  stack.push('b')
  stack.push('c')
  stack.push('d')
  const topPlate = stack.pop()
  expect(topPlate)
    .toEqual('d')
  expect(stack)
    .toMatchSnapshot()

})
