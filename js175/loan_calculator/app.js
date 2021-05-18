const HTTP = require('http'); //import http module
const URL = require('url').URL;  //import url module
const QUERYSTRING = require('querystring'); //we need querystring.parse method 
const PORT = 3000;  //assign port 3000 to PORT variable
const ROUTER = require('router');  //responsible for routing requests
const FINALHANDLER = require('finalhandler');
const SERVESTATIC = require('serve-static');
//On line 3 we include the Node path module. This provides us with access to the path.extname() method which we call on line 136. This method returns the file extension, if present, from a path passed to it as an argument. By assigning this file extension to a variable named fileExtension, we can then set the correct value for Content-Type on line 140, from a pre-defined list of MIME_TYPES
const HANDLEBARS = require('handlebars');  //import handlebars module (templateing engine)
const APR = 5;
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

function parseFormData(request, callback) {
  let body = '';
  request.on('data', chunk => {
    body += chunk.toString();
  });
  request.on('end', () => {
    let data = QUERYSTRING.parse(body);
    data.amount = Number(data.amount);
    data.duration = Number(data.duration);
    callback(data);
  });
}
//this funcion takes a request and a callback func as arguments. It contains two event listeners that liset when the stream of data starts and when ot ends. It allows us to work with the data in teh request body. The request body contains the data we submitted in the form in a querystring-like format: amount=10000&duration=5. Passing this data to QUERYSTRING.parse() returns an object with amount and duration properties. This object is passed to the callback that was passed as an argument to parseFormData().
//Within the callback passed to parseFormData(), we pass the parsed data to our createLoanOffer() function, and render the returned data using our loan offer template to create the content to be sent in the HTTP response.


//get path from the URL (we will interpert it later on)
function getPathname(path) {
  const myURL = new URL(path, `http://localhost:${PORT}`);
  return myURL.pathname;
}

//this function uses searchParams method that is used to catch parameters names as strings from the query string. getParameters returns an object containing thet data about parameters (amount and duration)
function getParameters(path) {
  const myURL = new URL(path, `http://localhost:${PORT}`);
  let params = myURL.searchParams;
  let data = {};
  data.amount = Number(params.get('amount'));
  data.duration = Number(params.get('duration'));
  return data;
}

//this function takes params object and returns a new object containing all the data that will be needed for the template. (APR, amount, amountIncrement etc.)
function generateOffer(data) {
  data.amountIncrement = data.amount + 100; //template doesn't support mathematical operation, so we need to perform them outside of the function. We want to keep the logic outside of presentation. 
  data.amountDecrement = data.amount - 100;
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
};


//create server takes a callback that takes two arguments req (request) and res(response) we assign the http.Server object returned by createServer to a constant called SERVER.  This object has access to a method defined by the http.Server class, called listen(). This method can take a port number as an argument, and then listen for incoming TCP connections on that port.

let router = ROUTER();
router.use(SERVESTATIC('public'));

router.get('/', function (req, res) {
  let content = render(LOAN_FORM_TEMPLATE, { apr: APR });

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.write(`${content}\n`);
  res.end();
});

router.get('/loan-offer', function (req, res) {
  let data = generateOffer(getParameters(req, res));
  let content = render(LOAN_OFFER_TEMPLATE, data);

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.write(`${content}\n`);
  res.end();
});

router.post('/loan-offer', function (req, res) {
  parseFormData(req, parsedData => {
    let data = generateOffer(parsedData);
    let content = render(LOAN_OFFER_TEMPLATE, data);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write(`${content}\n`);
    res.end();
  });
});

router.get('*', function (req, res) {
  res.statusCode = 404;
  res.end();
});



//Favicon.ico is the icon that gets shown on the left side of the tab of a web page.To have one in your domain, just save one favicon.ico in your root folder. We only want to request info that is not for favicon

//To implement this approach, we'll need to work with the file system. We can use Node's fs module to do this. The fs.readfile method can be called to read the contents of a file. It takes a file path as an argument, and attempts to read the contents of the file at the specified path. If it cannot do so (e.g. if the file does not exist) it creates an error (which can be passed to a callback as err), otherwise it returns the contents of the file (which can be passed to a callback as data).

const SERVER = new HTTP.createServer((req, res) => {
  router(req, res, FINALHANDLER(req, res));
});
//In the above code we also pass an optional callback to listen which simply logs Server listening on port, followed by the port number, to the console.
SERVER.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});