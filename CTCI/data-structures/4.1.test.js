const balanceCheck = require('./4.1');

let tree

beforeEach(() => {
  tree = {}

});

test('node', () => {
  expect(balanceCheck(tree))
    .toBeTruthy()
})

test('2 node', () => {
  tree.left = {}
  expect(balanceCheck(tree))
    .toBeTruthy()
})

test('3 node', () => {
  tree.left = {}
  tree.left.left = {}
  expect(balanceCheck(tree))
    .toBeFalsy()
})

test('5 node', () => {

  tree.left = {
    left : {},
    right : {},
  }
  tree.right = {}
  expect(balanceCheck(tree))
    .toBeTruthy()
})

test('upside down V node', () => {

  tree.left = {
    left : {
      left : {
        left : {},
      },
    },
  }

  tree.right = {
    right : {
      right : {
        right : {},
      },
    },
  }
  expect(balanceCheck(tree))
    .toBeFalsy()
})