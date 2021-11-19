// Starting with the template below, write some JavaScript code to move the red X to the last position in the document that the user clicked. Click the "EDIT ON CODEPEN" button on the upper-right to edit the template.

// - get the coordinates of the mouse click
//   - grab x
//     - move x to the coordinates

// let x;
// let y;
let objX = document.querySelector('.x');

// document.body.addEventListener('click', (event) => {
//   x = event.clientX;
//   y = event.clientY;
//   changePosition(objX, x, y);
// })

function changePosition(obj, x, y) {
  obj.style.left = x;
  obj.style.top = y;
}

// 2. Update your solution to the previous problem to make the red X move as you move the mouse around the document instead of depending on clicks.

document.body.addEventListener('mousemove', (event) => {
  let x = event.clientX;
  let y = event.clientY;
  changePosition(objX, x, y)
})

//3. Update your solution to the previous problem to change the color of the red X to blue when the user presses the b key, green in response to the g key, and red in response to r. The X should continue to follow the mouse around.

document.body.addEventListener('keydown', (event) => {
  let children = objX.children;
  let color;
  if (event.key === 'b') {
    color = 'blue';
  } else if (event.key === 'g') {
    color = 'green';
  } else if (event.key === 'r') {
    color = 'red';
  }

  for (let i = 0; i < children.length; i++) {
    children[i].style.background = color;
  }
});

