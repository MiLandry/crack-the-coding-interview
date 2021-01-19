const lcs = require('./LongestCommonSubsequence');



test('it adds', () => {
  expect(lcs("ABCDGH", "AEDFHR")) //ADH
    .toEqual(3)
})

