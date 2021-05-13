const HTTP = require('http');
const URL = require('url').URL;
const PORT = 3000;


const SERVER = new HTTP.createServer((req, res) => { //creating server
  let method = req.method;  //save request method str
  let path = req.url;  //save request url str

  const myURL = new URL(path, `http://localhost:${PORT}`)  //instantiate url object
  let params = getParameters(myURL);



  if (path === '/favicon.ico') {
    res.statusCode = 400;
    res.end();
  } else {

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write(`${method} ${path}\n`);
    for (let idx = 0; idx < params.rolls; idx++) {
      res.write(rollDice(params));
    };
    res.end();
  }

});

SERVER.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);

});

function rollDice(params) {
  return `${randomNumber(1, params.sides)}\n`;
}

function randomNumber(min, max) {
  return Math.floor((Math.random() * (max - min)) + 1) + min;
}

function getParameters(myURL) {
  let params = myURL.searchParams;
  let rolls = params.get('rolls');
  let sides = params.get('sides');
  return {
    rolls,
    sides
  };
}