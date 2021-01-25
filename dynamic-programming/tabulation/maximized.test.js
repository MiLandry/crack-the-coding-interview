const maximized = require('./maximized');

// let ht

// beforeEach(() => {
//   ht = new HashTable()

// });

test('it finds', () => {

  expect(1).toEqual(1)

  // expect(maximized([5,7,4,2,8,1,6], 3))
  //   .toEqual(13)

    expect(maximized([6, 5, 3, 8, 9, 10, 4, 7, 10], 4))
    .toEqual(27)

})

/*
nums = [6, 5, 3, 8, 9, 10, 4, 7, 10]
k = 4
expected = 27 # [6, 5, 3, 8, 9], [10], [4, 7], [10] => 3 + 10 + 4 + 10 = 27
self.assertEqual(expected, max_aggregate_subarray_min(nums, k))
==*/