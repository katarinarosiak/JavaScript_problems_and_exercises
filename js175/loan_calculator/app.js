const HTTP = require('http');
const URL = require('url').URL;
const PORT = 3000;

const SERVER = new HTTP.createServer((req, res) => {
  let method = req.method;
  let path = req.url;

  const myURL = new URL(path, `http://localhost:${PORT}`);
  let params = getParameters(myURL);

  if (path === '/favicon.ico') {
    res.statusCode = 400;
    res.end();
  } else {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write(`Loan amount: $${params.amount}\n`);
    res.write(`Loan duration: ${params.duration} years\n`);
    res.write(`APR: 5%\n`);
    res.write(`Montly payment: $${countMonthlyPayment(params)}\n`);
    res.end();
  }

});

SERVER.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});

function countMonthlyPayment(params) {
  let loanAmount = Number(params.amount);
  let loanDuration = Number(params.duration);
  const APR = 0.05;
  let monthlyInterestRate = ((annRate) => (annRate / 100) / 12)(APR);
  let monthlyPayment = ((loanAmount, monthlyInterestRate, loanDuration) => {
    return Number(((loanAmount * (monthlyInterestRate /
      (1 - Math.pow(1 + monthlyInterestRate -
        (loanDuration * 12))))).toFixed(2)));
  })(loanAmount, monthlyInterestRate, loanDuration);
  return monthlyPayment;
}

function getParameters(myURL) {
  let params = myURL.searchParams;
  let amount = params.get('amount');
  let duration = params.get('duration');
  return {
    amount,
    duration
  };
}