
//3. 
let link = document.getElementById('toggle');
link.onclick = (e) => {
  e.preventDefault();
  let elToChange = document.getElementById('notice');
  if (elToChange.classList[0] === 'hidden') {
    console.log(elToChange.classList[0]);
    elToChange.classList.remove('hidden')
    elToChange.classList.toggle('visible');
  } else {
    elToChange.classList.remove('visible');
    elToChange.classList.add('hidden');
  }
};

//4 Add an onclick event to the element we show and hide above. This time, the function should set the class of the element to 'hidden'. This event will let you hide the visible element by clicking on it. As with the previous function, the first thing the function should do is invoke e.preventDefault.

//5. Locate the multiplication paragraph and change the text to the result of the arithmetic problem.

let multiplication = document.getElementById('multiplication');
let RE = /\d+/g;
let numbers = multiplication.textContent.match(RE);
multiplication.textContent = numbers[0] * numbers[1];

//5. Set the ID of the body element to 'styled' to apply the rest of the styles from the original file. The body tag in this file doesn't have an ID, so you must locate it by some other means.

document.body.setAttribute('ID', 'styled');