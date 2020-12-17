//PP Factory functions 3-5

// It returns an invoice object, with phone and internet properties, and a total method.
// The default value for the phone service is 3000, and the internet service is 5500 (in cents, of course!).
// The function takes an object argument whose attributes override the default values.
// let invoice = {
//   phone: 3000,
//   internet: 6500
// };

// let payment = {
//   phone: 1300,
//   internet: 5500
// };

// let invoiceTotal = invoice.phone + invoice.internet;
// let paymentTotal = payment.phone + payment.internet;
// let remainingDue = invoiceTotal - paymentTotal;

// console.log(paymentTotal);         // => 6800
// console.log(remainingDue);         // => 2700

function createInvoice(services = {}) {
  return {
    phone: services.phone || 3000,
    internet: services.internet || 5500,
    paymentPhone: 0,
    paymentInternet: 0,
    paymentAmount: 0,
    paymentTotal: function () {
      return this.paymentPhone + this.paymentInternet + this.paymentAmount
    },
    total() {
      return this.phone + this.internet;
    },
    addPayment(payment) {
      if (!Array.isArray(payment)) {
        this.paymentPhone += payment.phone;
        this.paymentInternet += payment.internet;
        this.paymentAmount += payment.amount;
      } else {
        payment.forEach(obj => {
          this.paymentPhone += obj.phone;
          this.paymentInternet += obj.internet;
          this.paymentAmount += obj.amount;
        })
      }
    },
    amountDue() {
      return this.total() - this.paymentTotal();
    },
  }
};

function invoiceTotal(invoices) {
  let total = 0;

  for (let index = 0; index < invoices.length; index += 1) {
    total += invoices[index].total();
  }

  return total;
}

let invoices = [];
invoices.push(createInvoice());
invoices.push(createInvoice({ internet: 6500 }));
invoices.push(createInvoice({ phone: 2000 }));
invoices.push(createInvoice({
  phone: 1000,
  internet: 4500,
}));

//console.log(invoiceTotal(invoices)); // 31000

// Payment for one service, e.g., { internet: 1000 } or { phone: 1000 }.
// Payment for both services, e.g., { internet: 2000, phone: 1000 }.
// Payment with just an amount property, e.g., { amount: 2000 }.
// The function should return an object that has the amount paid for each service and a total method that returns the payment total. If the amount property is not present in the argument, it should return the sum of the phone and internet service charges; if the amount property is present, return the value of that property.

function createPayment(services = {}) {
  return {
    phone: services.phone || 0,
    internet: services.internet || 0,
    amount: services.amount || 0,
    total() {
      return this.phone + this.internet + this.amount;
    }
  }
}

function paymentTotal(payments) {
  return payments.reduce((sum, payment) => sum + payment.total(), 0);
}

let payments = [];
payments.push(createPayment());
payments.push(createPayment({
  internet: 6500,
}));

payments.push(createPayment({
  phone: 2000,
}));

payments.push(createPayment({
  phone: 1000,
  internet: 4500,
}));

payments.push(createPayment({
  amount: 10000,
}));

//console.log(paymentTotal(payments));      // => 24000


let payment1 = createPayment({ amount: 2000 });
let payment2 = createPayment({
  phone: 1000,
  internet: 1200
});

let payment3 = createPayment({ phone: 1000 });

let invoice = createInvoice({
  phone: 1200,
  internet: 4000,
});
invoice.addPayment(payment1);
invoice.addPayment([payment2, payment3]);
console.log(invoice.amountDue());       // this should return 0

