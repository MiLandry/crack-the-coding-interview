// Complete the countApplesAndOranges function below.
function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let count = 0

  for (let apple of apples) {
    const location = a + apple
    if (location >= s || location <= t) count++

  }
  con

  for (let orange of oranges) {
    const location = b + orange
    if (location >= s || location <= t) count++
  }

  return count


}



