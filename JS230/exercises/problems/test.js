
document.addEventListener('DOMContentLoaded', () => {
    let divRed = document.querySelector('#red'); 
    let divBlue = document.querySelector('#blue'); 
    let divOrange = document.querySelector('#orange'); 
    let  divGreen = document.querySelector('#green'); 
    
    
    divRed.addEventListener('click', track(event => {
        document.body.style.background = 'red';
      }));
      
      divBlue.addEventListener('click', track(event => {
        event.stopPropagation();
        document.body.style.background = 'blue';
      }));
      
      divOrange.addEventListener('click', track(event => {
        document.body.style.background = 'orange';
      }));
      
      divGreen.addEventListener('click', track(event => {
        document.body.style.background = 'green';
      }));
    
      divGreen.addEventListener('click', () => {
        console.log(tracker.list().length)
        console.log(tracker.elements())
        console.log(tracker.elements()[0] === document.querySelector('#blue'))
        console.log(tracker.elements()[3] === document.querySelector('#green'))
        console.log(tracker.list()[0]);
        tracker.clear();
        console.log(tracker.list());
        tracker.list()[0] = 'abc'; 
        console.log(tracker.list().length); 
      });

})






let request = new XMLHttpRequest();

request.open('GET', 'https://some-random-page.com');

request.addEventListener('load', () => {
    console.log(request.body)
    console.log(request.response.body);      
})

request.send(); 




let request = new XMLHttpRequest();

let queryPath = encodeURIComponent('title=Hello World')
request.open('POST', `https://ls-230-book-catalog.herokuapp.com/books?${queryPath}`);

request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); 



request.addEventListener('load', () => {
    console.log(request.body)
    console.log(request.response.body);      
})

request.send();