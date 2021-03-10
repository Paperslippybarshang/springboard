beforeAll(() => {
})


it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 100,
    years: 2,
    rate: 1.5
  }
  expect(calculateMonthlyPayment(values)).toEqual(13.29)
});


it("should return a result with 2 decimal places", function() {
  // ..
});

/// etc
