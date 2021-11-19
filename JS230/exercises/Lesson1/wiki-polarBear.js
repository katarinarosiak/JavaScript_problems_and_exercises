// Count the images on the page, then count the PNG images. Log both results.
function walk(node, callback) {
  callback(node);

  for (let index = 0; index < node.childNodes.length; index += 1) {
    walk(node.childNodes[index], callback);
  }
}
// let body = document.childNodes[1].children[1];
// let imagesCounter = 0;
// let pngCounter = 0;
// walk(body, (node) => {
//   if (node.nodeName === 'IMG') {
//     imagesCounter++;
//     let text = node.srcset
//     let RE = /\.png/g;

//     if (RE.test(text)) {
//       pngCounter++;
//     }
//   }
// });

// console.log(imagesCounter);
// console.log(pngCounter);

// Change the link color to red for every link on the page.

let body = document.childNodes[1].children[1];

walk(body, (node) => {
  if (node.nodeName === 'A') {
    node.style.color = 'red';
  }
});

