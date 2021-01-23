const fibo = require('./fibo');



test('fibo', () => {

  expect(fibo(1))
    .toEqual(1)

    expect(fibo(2))
    .toEqual(1)

    expect(fibo(4))
    .toEqual(3)

    expect(fibo(6))
    .toEqual(8)

    expect(fibo(15))
    .toEqual(610)

    expect(fibo(55))
    .toEqual(139583862445)

})
