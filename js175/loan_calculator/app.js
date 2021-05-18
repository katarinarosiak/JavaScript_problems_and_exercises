const HTTP = require('http'); //import http module
const URL = require('url').URL;  //import url module
const PORT = 3000;  //assign port 3000 to PORT variable
const FS = require('fs');
const PATH = require('path'); //On line 3 we include the Node path module. This provides us with access to the path.extname() method which we call on line 136. This method returns the file extension, if present, from a path passed to it as an argument. By assigning this file extension to a variable named fileExtension, we can then set the correct value for Content-Type on line 140, from a pre-defined list of MIME_TYPES
const HANDLEBARS = require('handlebars');  //import handlebars module (templateing engine)
const APR = 5;
const MIME_TYPES = {
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.jpg': 'image/jpeg',
  '.png': 'image/png',
  '.ico': 'image/x-icon'
};
//create a template html file (+CSS) and use syntax {{placeholder}} for the variables 
const LOAN_OFFER_SOURCE = `  
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Loan Calculator</title>
    <link rel="stylesheet" href="/assets/css/styles.css">
  </head>
  <body>
    <article>
      <h1>Loan Calculator</h1>
      <table>
        <tbody>
        <tr>
        <th>Amount:</th>
          <td>
            <a href='/loan-offer?amount={{amountDecrement}}&duration={{duration}}'>- $100</a>
          </td>
          <td>{{amount}}</td>
          <td>
            <a href='/loan-offer?amount={{amountIncrement}}&duration={{duration}}'>+ $100</a>
          </td>
        </tr>
        <tr>
          <th>Duration:</th>
          <td>
            <a href='/loan-offer?amount={{amount}}&duration={{durationDecrement}}'>- 1 year</a>
          </td>
          <td>{{duration}} years</td>
          <td>
            <a href='/loan-offer?amount={{amount}}&duration={{durationIncrement}}'>+ 1 year</a>
          </td>
        </tr>
        <tr>
          <th>APR:</th>
          <td colspan='3'>5%</td>
        </tr>
        <tr>
          <th>Monthly payment:</th>
          <td colspan='3'>{{payment}}</td>
        </tr>
        </tbody>
      </table>
    </article>
  </body>
</html>
`;
const LOAN_FORM_SOURCE = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Loan Calculator</title>
    <link rel="stylesheet" href="/assets/css/styles.css">
  </head>
  <body>
    <article>
      <h1>Loan Calculator</h1>
      <form action="/loan-offer" method="post">
        <p>All loans are offered at an APR of {{apr}}%.</p>
        <label for="amount">How much do you want to borrow (in dollars)?</label>
        <input type="number" name="amount" value="">
        <label for="amount">How much time do you want to pay back your loan?</label>
        <input type="number" name="duration" value="">
        <input type="submit" name="" value="Get loan offer!">
      </form>
    </article>
  </body>
</html>
`;

const LOAN_OFFER_TEMPLATE = HANDLEBARS.compile(LOAN_OFFER_SOURCE);  //call HANDLEBARS.complile function and pase the html template as a argument and assign it to LEAN_OFFER_TEMPLATE. Compile function takes te html file and compile it with the variables and returns a function that can take a data object as argumet that contains data that we want to complie in the html code. 
const LOAN_FORM_TEMPLATE = HANDLEBARS.compile(LOAN_FORM_SOURCE);

// render func takes the data object and the LOAN_OFFER_TEMPLATE function as arguments. It will then call the LOAN_OFFER_FUNCTION and pass data object. It returns an hetml file as a string 
function render(template, data) {
  let html = template(data);
  return html;
}

//get path from the URL (we will interpert it later on)
function getPathname(path) {
  const myURL = new URL(path, `http://localhost:${PORT}`);
  return myURL.pathname;
}

//this function uses searchParams method that is used to catch parameters names as strings from the query string. getParameters returns an object containing thet data about parameters (amount and duration)
function getParameters(myURL) {
  let params = myURL.searchParams;
  let amount = Number(params.get('amount'));
  let duration = Number(params.get('duration'));
  return {
    amount,
    duration
  };
}

//this function takes params object and returns a new object containing all the data that will be needed for the template. (APR, amount, amountIncrement etc.)
function generateOfferHtml(params) {
  let data = {};

  data.amount = params.amount;
  data.amountIncrement = data.amount + 100; //template doesn't support mathematical operation, so we need to perform them outside of the function. We want to keep the logic outside of presentation. 
  data.amountDecrement = data.amount - 100;
  data.duration = params.duration;
  data.durationIncrement = data.duration + 1;
  data.durationDecrement = data.duration - 1;
  data.apr = APR;
  data.payment = getMonthlyPayment(data.amount, data.duration, APR);
  return data;
}

//this function takes amount, duration and APR as arguments and calculate what will be the monthly payment. It returns a number fixed to 2 decialms. 
function getMonthlyPayment(amount, duration, APR) {
  let loanDurationInMonths = duration * 12;
  let monthlyInterestRate = ((annRate) => (annRate / 100) / 12)(APR);
  return countMonthlyPayment(amount, monthlyInterestRate,
    loanDurationInMonths).toFixed(2);
}

function countMonthlyPayment(loanAmount, monthlyInterestRate, loanDuration) {
  return loanAmount * (monthlyInterestRate / (1 - Math.pow((1 + monthlyInterestRate), (-loanDuration))));
}

//create server takes a callback that takes two arguments req (request) and res(response) we assign the http.Server object returned by createServer to a constant called SERVER.  This object has access to a method defined by the http.Server class, called listen(). This method can take a port number as an argument, and then listen for incoming TCP connections on that port.
const SERVER = new HTTP.createServer((req, res) => {
  let method = req.method; //get the method used 
  let path = req.url; //get the URL path
  let pathname = getPathname(path);
  let fileExtension = PATH.extname(pathname);
  const myURL = new URL(path, `http://localhost:${PORT}`);  //
  let params = getParameters(myURL);

  //Favicon.ico is the icon that gets shown on the left side of the tab of a web page.To have one in your domain, just save one favicon.ico in your root folder. We only want to request info that is not for favicon

  FS.readFile(`./public${pathname}`, (err, data) => {
    if (data) {
      res.setHeader('Content-Type', `${MIME_TYPES[fileExtension]}`)
      res.statusCode = 200;
      res.write(`${data}\n`);
      res.end();
    } else if (pathname === '/') {
      let content = render(LOAN_FORM_TEMPLATE, { apr: APR });
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      res.write(`${content}\n`);
      res.end();
    } else if (pathname === '/loan-offer') {
      let data = generateOfferHtml(params);
      let content = render(LOAN_OFFER_TEMPLATE, data);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      res.write(`${content}\n`);
      res.end();
    } else {
      res.statusCode = 400;
      res.end();
    }
  })
});
//In the above code we also pass an optional callback to listen which simply logs Server listening on port, followed by the port number, to the console.
SERVER.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});