const HTTP = require('http');
const URL = require('url').URL;
const PORT = 3000;
const HTML_START = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Loan Calculator</title>
    <style type="text/css">
      body {
        background: rgba(250, 250, 250);
        font-family: sans-serif;
        color: rgb(50, 50, 50);
      }

      article {
        width: 100%;
        max-width: 40rem;
        margin: 0 auto;
        padding: 1rem 2rem;
      }

      h1 {
        font-size: 2.5rem;
        text-align: center;
      }

      table {
        font-size: 1.5rem;
      }
      th {
        text-align: right;
      }
      td {
        text-align: center;
      }
      th,
      td {
        padding: 0.5rem;
      }
    </style>
  </head>
  <body>
    <article>
      <h1>Loan Calculator</h1>
      <table>
        <tbody>
`;

const HTML_END = `
        </tbody>
      </table>
    </article>
  </body>
</html>
`;

const SERVER = new HTTP.createServer((req, res) => {
  //let method = req.method;
  let path = req.url;

  const myURL = new URL(path, `http://localhost:${PORT}`);
  let params = getParameters(myURL);

  if (path === '/favicon.ico') {
    res.statusCode = 400;
    res.end();
  } else {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'html');
    res.write(HTML_START);
    res.write(generateOfferHtml(params, getMonthlyPayment(params)))
    res.write(HTML_END);
    res.end();
  }

});
function generateOfferHtml(params, monthlyPayment) {
  let content = `<tr>
                  <th>Amount:</th>
                    <td>
                      <a href='/?amount=${params.amount - 100}&duration=${params.duration}'>- $100</a>
                    </td>
                    <td>$${params.amount}</td>
                    <td>
                      <a href='/?amount=${params.amount + 100}&duration=${params.duration}'>+ $100</a>
                    </td>
                  </tr>
                  <tr>
                    <th>Duration:</th>
                    <td>
                      <a href='/?amount=${params.amount}&duration=${params.duration - 1}'>- 1 year</a>
                    </td>
                    <td>${params.duration} years</td>
                    <td>
                      <a href='/?amount=${params.amount}&duration=${params.duration + 1}'>+ 1 year</a>
                    </td>
                  </tr>
                  <tr>
                    <th>APR:</th>
                    <td colspan='3'>5%</td>
                  </tr>
                  <tr>
                    <th>Monthly payment:</th>
                    <td colspan='3'>$${monthlyPayment}</td>
                  </tr>`;
  return content;
}

function getParameters(myURL) {
  let params = myURL.searchParams;
  let amount = Number(params.get('amount'));
  let duration = Number(params.get('duration'));
  return {
    amount,
    duration
  };
}

function getMonthlyPayment(params) {
  let loanAmount = params.amount;
  let loanDurationInMonths = params.duration * 12;
  const APR = 5;
  let monthlyInterestRate = ((annRate) => (annRate / 100) / 12)(APR);
  let monthlyPayment = countMonthlyPayment(loanAmount, monthlyInterestRate,
    loanDurationInMonths).toFixed(2);

  return monthlyPayment;
}

function countMonthlyPayment(loanAmount, monthlyInterestRate, loanDuration) {
  return loanAmount * (monthlyInterestRate / (1 - Math.pow((1 + monthlyInterestRate), (-loanDuration))));
}

SERVER.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});