
let h1 = document.querySelector('h1')
let head = document.querySelector('head');
head.appendChild(h1);

let main = document.querySelector('main');
let headers = document.querySelectorAll('header');
let headerChildren = headers[0].children;
let nav = document.querySelector('nav');
headers[1].insertBefore(headerChildren[0], nav);
headers[1].insertBefore(headerChildren[0], nav);

document.body.insertBefore(headers[1], main);

let figures = document.querySelectorAll('figure');
let article = document.querySelector('article');
article.appendChild(figures[1]);
article.appendChild(figures[0]);

nav.style.background = '#c0f0c0'



