const TAX_RATE = 0.07;
const PHONE_PRICE = 149.99;
const ACCESSORY_PRICE = 9.99;
const SPENDING_LIMIT = 350.00;

var account_balance = 0;
var total = 0;
var taxed_total = 0;

account_balance = prompt("Please enter your account balance (0.00 format)");

function final_taxed_total() {

total = PHONE_PRICE + ACCESSORY_PRICE;

for (var i=0; total < SPENDING_LIMIT; i++) {
  total = total + ACCESSORY_PRICE;
}

taxed_total = total +  (total * TAX_RATE);

return taxed_total;
}

function affordable() {
  if (taxed_total <= account_balance) {
    console.log("PURCHASE CLEARED");
  } else {
    console.log("PURCHASE DENIED");
  }
}

function format_price() {
  return "$" + taxed_total.toFixed(2);
}
