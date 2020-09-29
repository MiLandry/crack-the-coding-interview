const Queue = require('./Queue');

let queue

beforeEach(() => {

queue = new Queue()
});

test('it adds', () => {
  queue.enqueue('a')
  queue.enqueue('b')
  queue.enqueue('c')
  queue.enqueue('d')
  expect(queue)
    .toMatchSnapshot()

})

test('it pops', () => {
  queue.enqueue('a')
  queue.enqueue('b')
  queue.enqueue('c')
  queue.enqueue('d')
  const personInline = queue.dequeue()
  expect(personInline)
    .toEqual('a')
  expect(queue)
    .toMatchSnapshot()

})
