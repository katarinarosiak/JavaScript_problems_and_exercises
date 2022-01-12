/*
Given the JavaScript code below, create the corresponding HTML 
that results to the same logs to the console when executed 
in sequence.





*/

document.addEventListener('DOMContentLoaded', () => {


    var nodeA = document.body.firstElementChild;
    console.log(document.querySelector('footer').children.length);
    console.log(document.querySelector('body').replaceChild(document.querySelector('footer'), document.body.firstElementChild).tagName);
    console.log(document.body.appendChild(nodeA))




})

