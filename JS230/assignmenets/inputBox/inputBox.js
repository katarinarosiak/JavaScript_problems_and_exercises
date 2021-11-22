// Write JavaScript to add the focused class to the text-field element when the user clicks the element.

document.addEventListener('DOMContentLoaded', event => {
  let textField = document.querySelector('.text-field');

  textField.addEventListener('click', event => {
    textField.classList.add('focused');
  });
  document.addEventListener('click', event => {
    textField.classList.remove('focused');
  })


});