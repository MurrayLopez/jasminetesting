describe("Loan Calculator", function() {
  it("should calculate monthly payment correctly", function() {
    expect(calculateMonthlyPayment({ amount: 10000, years: 5, rate: 5 })).toEqual("188.71");
    expect(calculateMonthlyPayment({ amount: 20000, years: 10, rate: 3.5 })).toEqual("202.76");
    expect(calculateMonthlyPayment({ amount: 5000, years: 3, rate: 7.25 })).toEqual("154.17");
  });


it("should return a result with 2 decimal places", function() {
  // ..
});

/// etc
