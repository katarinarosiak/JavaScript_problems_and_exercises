/*
//TODO: 
- attach files
    <script src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.7.7/handlebars.min.js"></script>
    <script type="text/javascript" src="quiz.js"></script>
    <link rel="stylesheet" href="quiz.css">

    <script type="text/x-handlebars-template" id="quizForm">

//Goal: 
    Create a Rich Text editor tat lets users edit text in a WYSIWYG  (what you see is what you get) way.  


// Assets/ Inputs: 


//Specifics: 

Explicit: 
- it should let users: 
    - enter text
    make it bold
    make it italic
    make it underline
    - make stright throught
    - creare a link
    create unordered list
    - create ordered list
    - align text to the right, left. center, fully-justified 

    - use execCommand

    - use contenteditable global attributes - if true the user can edit the el  





Implicit: (test to find out)


NOUNS: 


VERBS: 
    makeBold(); 
    italicize();
    underline(); 
    strikeThrough();
    makeLink(); 
    makeUL();
    makeOL(); 
    alignText(); 'left', right', center, fully-justified  


UI: 

HTML:  => 

h1 Rich Text Editor

div id editor
    div coomandButtons
    div textField



CSS: 
backgroudn
flexbox div, div, div 

   

Data Structures:


A: 
    attach event handler to buttons
        if buttonesh clicked:
        focus on the text Area
            makeBold(); 
            italicize();
            underline(); 
            strikeThrough();
            makeLink(); 
            makeUL();
            makeOL(); 
            alignText(); 'left', right', center, fully-justified  




 method()  M/V/C

*/

document.addEventListener('DOMContentLoaded', () => {
    let div = document.querySelector('#textField');
    let comandButtons = document.querySelector('#comandButtons'); 

    comandButtons.addEventListener('click', (event) => {
        let command = event.target.classList[0];

        if (command === 'createLink') {
            let link = prompt('Please insert the link:');
            div.focus();
            document.execCommand(command, true, link);  
        } else {
            div.focus(); 
            document.execCommand(command)
        }
 
    }) 

}); 