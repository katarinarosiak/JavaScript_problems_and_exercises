let div1 = document.getElementById('div1');
let div2 = document.getElementById('div2');
let div3 = document.getElementById('div3');
let div4 = document.getElementById('div4');

div1.addEventListener('click', (event) => {
  console.log(event.currentTarget.id)
}, true)
div3.addEventListener('click', (event) => {
  console.log(event.currentTarget.id)
})
div4.addEventListener('click', (event) => {
  console.log(event.currentTarget.id);
}, true);


