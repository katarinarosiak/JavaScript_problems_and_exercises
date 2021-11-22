// When the user presses the Backspace key while the text-field element has the focused class, delete the last character from the text within the content element.
let intervalId;
let isFocusedField;

document.addEventListener('DOMContentLoaded', () => {
  let textField = document.querySelector('.text-field');

  textField.addEventListener('click', event => {
    event.stopPropagation();
    textField.classList.add('focused');
    intervalId = intervalId || setInterval(function () {
      textField.classList.toggle('cursor');
    }, 500);

    isFocusedField = true;
  });
});

let stringVal = '';
let content = document.querySelector('.content');
document.addEventListener('keydown', e => {
  if (isFocusedField) {
    if (e.key === 'Backspace') {
      stringVal = stringVal.slice(0, stringVal.length - 1);

    } else {
      stringVal += e.key;
    }
    content.textContent = stringVal;
  };
});

document.addEventListener('click', event => {
  clearInterval(intervalId);
  let textField = document.querySelector('.text-field');
  textField.classList.remove('focused');
  textField.classList.remove('cursor');
  isFocusedField = false;
});

