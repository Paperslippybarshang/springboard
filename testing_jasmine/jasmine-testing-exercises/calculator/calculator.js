window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {

  const values = {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
  return values
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  document.querySelector("#loan-amount").value = 100
  document.querySelector("#loan-years").value = 1
  document.querySelector("#loan-rate").value = 1

  const defaultValues = {
    amount: 100,
    years: 1,
    rate: 1
  }
  calculateMonthlyPayment(defaultValues)
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const newValues = getCurrentUIValues();
  calculateMonthlyPayment(newValues)
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const amtPrinciple = values.amount;
  const interestRate = values.rate / 12;
  const totalNumPayments = values.years * 12;
  const monthlyPaymentNum = (amtPrinciple * interestRate) / (1-(1+interestRate)**(-totalNumPayments))
  const monthlyPayment = '$' + monthlyPaymentNum.toFixed(2).toString()
  updateMonthly(monthlyPayment);
  return monthlyPayment
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyAmount =  document.querySelector('#monthly-payment');
  monthlyAmount.innerHTML = monthly;
}
