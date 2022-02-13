let request = new XMLHttpRequest(); 

request.open('GET', 'https://learnwebcode.github.io/json-example/pets-data.json');
request.responseType = 'json';

console.log('hello'); 
request.addEventListener('load', () => {
    if (request.status >= 200 && request.status < 400) {
        createHTML(request.response); 
    } else {
        console.log(request.response); 
    }
});  

request.addEventListener('error', () => {
    console.log('connection error'); 
}); 

request.send(); 


function createHTML(data) {
    console.log('test'); 
}