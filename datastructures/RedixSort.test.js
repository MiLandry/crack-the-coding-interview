const rs = require('./RedixSort');


test('it sorts', () => {
  expect(rs([4,3,2,1]))
    .toMatchSnapshot()
})

test('it sorts', () => {
  expect(rs([7,1,2,1]))
    .toMatchSnapshot()
})

// test('it sorts', () => {
//   expect(rs([ 170, 45, 75, 90, 802, 24, 2, 66]))
//     .toMatchSnapshot()
// })

