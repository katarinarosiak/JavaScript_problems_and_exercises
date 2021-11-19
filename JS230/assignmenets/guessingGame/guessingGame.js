
document.addEventListener('DOMContentLoaded', event => {
  let button = document.querySelector('button');
  let counter = 0;
  let randomNum = generateRandomNum(1, 100);

  button.addEventListener('click', event => {
    let input = document.querySelector('input');
    let value = input.value;
    if (!validateInput(value)) return;
    let p = document.querySelector('p');
    counter++;
    if (randomNum === +value) {
      p.textContent = `You guessed it! It took you ${counter} guess${counter === 1 ? '' : 'es'}.`
    } else {
      let highLow = value > randomNum ? 'lower' : 'higher';
      p.textContent = `My number is ${highLow} than ${value}`;
    }
  });

  function generateRandomNum(min, max) {
    return Math.floor(min + Math.random() * (max - min + 1));
  }

  function validateInput(input) {
    if (Number.isNaN(Number(input)) || (+input > 100 || +input < 0)) {
      alert('invalid input. ');
      return false;
    }
    return true;
  }
});
// document.addEventListener('DOMCotentLoaded', () => {
//   let button = document.querySelectorAll('button');
//   console.log('loaded');
//   button.addEventListener('click', event => {
//     console.log('button ');
//   });

