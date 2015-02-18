describe("BankAccount", function() {

  describe("deposit", function() {
    it("will add the amount to the balance", function() {
      var testBankAccount = Object.create(BankAccount);
      testBankAccount.deposit(10);
      expect(testBankAccount.balance).to.equal(10);
    });
  });
  describe("withdraw", function() {
    it("will subtract the amount from the balance", function() {
      var testBankAccount = Object.create(BankAccount);
      testBankAccount.withdraw(10);
      expect(testBankAccount.balance).to.equal(-10);
    });
  });


});
