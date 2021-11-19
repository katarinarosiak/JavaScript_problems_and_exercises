//grab text area 
// create a div with a text 
// craete a counter 
// counte number of char 
// decrement counter on every letter 

document.addEventListener('DOMContentLoaded', () => {
  let textArea = document.querySelector('textarea');
  let p = document.querySelector('p');

  textArea.addEventListener('keydown', updateCounter);
  updateCounter();
  function updateCounter() {
    let textLength = document.querySelector('textarea').value.length
    const MAX_LEN = 140;
    let counter = MAX_LEN - textLength;
    let message = `${counter} characters remaining.`
    p.textContent = message;
    if (counter < 0) {
      textArea.style.color = 'red';
    } else {
      textArea.style.color = 'black';
    }
  }
});

// document.addEventListener('DOMContentLoaded', () => {
//   let composer = document.querySelector('.composer');
//   let textarea = composer.querySelector('textarea');
//   let counter = composer.querySelector('.counter');
//   let button = composer.querySelector('button');

//   function updateCounter() {
//     let length = textarea.value.length;
//     let remaining = 140 - length;
//     let message = `${remaining.toString()} characters remaining`;
//     let invalid = remaining < 0;

//     textarea.classList.toggle('invalid', invalid);
//     button.disabled = invalid;

//     counter.textContent = message;
//   }

//   textarea.addEventListener('keyup', updateCounter);

//   updateCounter();
// });