var BankAccount = {
  balance: 0,
  deposit: function(amount) {
    this.balance += amount;
  },
  withdraw: function(amount) {
    this.balance -= amount;
  }

};

$(function() {
  $("form#sign-up").submit(function(event) {
    event.preventDefault();

    var name = $("input#name").val();
    var initialDeposit = $("input#initial-deposit").val().length ? parseFloat($("input#initial-deposit").val()) : 0;

    var newBankAccount = Object.create(BankAccount);
    newBankAccount.name = name;
    newBankAccount.deposit(initialDeposit);

    $("input#name").val("");
    $("input#initial-deposit").val("");
    $("#balance").text("$" + newBankAccount.balance.toFixed(2));

    $("form#deposit-withdraw").submit(function(event) {
      event.preventDefault();

      var depositAmount = $("input#deposit-amt").val().length ? parseFloat($("input#deposit-amt").val()) : 0;
      var withdrawAmount = $("input#withdraw-amt").val().length ? parseFloat($("input#withdraw-amt").val()) : 0;


      newBankAccount.deposit(depositAmount);
      newBankAccount.withdraw(withdrawAmount);


      $("input#deposit-amt").val("");
      $("input#withdraw-amt").val("");
      $("#balance").text("$" + newBankAccount.balance.toFixed(2));
    });

  });

});
