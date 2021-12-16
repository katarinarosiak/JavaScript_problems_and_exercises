// // Write some JavaScript code that:
// -  loads JSON data from https://api.github.com/repos/rails/rails, 
// - parses the JSON into a JavaScript object, 
// - and then logs the HTTP status code and the number of open issues to the console.

let request = new XMLHttpRequest();
request.open('GET', 'hts://api.github.com/repos/rails/rails');

request.addEventListener('load', event => {
  let data = JSON.parse(request.response);
  console.log(request.status);
  console.log(data.open_issues);
});

request.addEventListener('error', event => {
  console.log('The request could not be completed!');
});

request.send();