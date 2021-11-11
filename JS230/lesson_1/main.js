function walk(node, callback) {
  callback(node);

  for (let index = 0; index < node.childNodes.length; index += 1) {
    walk(node.childNodes[index], callback);
  }
}


//exercises 1
// let html = document.childNodes[1];
// let body = html.lastChild;
// let heading = body.childNodes[1];
// heading.style.color = 'red';
// heading.style.fontSize = '48px';
// console.log(document.childNodes[1].childNodes);

//ex. 2: 
// function walk(node, callback) {
//   callback(node);

//   for (let index = 0; index < node.childNodes.length; index += 1) {
//     walk(node.childNodes[index], callback);
//   }
// }
// walk(document, (node) => {
//   console.log(node.childNodes);
// })


//Count the paragraphs on the page, and then log the result:
// let body = document.childNodes[1].lastChild;
// let bodyChildren = body.childNodes;
// let counter = 0;

// for (let i = 0; i < bodyChildren.length; i++) {
//   if (bodyChildren[i].nodeName === 'P') {
//     counter++;
//   }
// }
// console.log(counter);


//Retrieve the first word from each paragraph on the page and log the entire list.

// let final = [];
// walk(document, node => {
//   if (node.nodeName === 'P') {
//     let textData = node.firstChild.data.trim().split(' ')[0];
//     final.push(textData);
//   }
// });

// console.log(final);

//Add the class stanza to each paragraph except the first.

// let nodeP = [];
// walk(document, node => {
//   if (node.nodeName === 'P') {
//     nodeP.push(node);
//   }
// });
// nodeP.shift();
// nodeP.forEach(node => {
//   node.classList.add('stanza');
// });


