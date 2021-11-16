//1. Write some JavaScript code to retrieve a word count for each h2 heading on the page.

// function getWordCount() {
//   let wordCount = 0;
//   let headers = document.querySelectorAll('h2');
//   headers = Array.prototype.slice.call(headers);
//   return headers.map(header => {
//     return header.textContent.split(' ').length;
//   })
//   return headers;
// }

// console.log(getWordCount());

// 2. The page has a table of contents with the title "Contents" and links to the different content sections on "Naming and etymology," "Taxonomy and evolution," etc.

// Use three different DOM methods to retrieve a reference to the div element that contains the table of contents.

//1. getElementById:
let div = document.getElementById("toc");

//2. querySelectors
let div1 = document.querySelector("#toc");
let div2 = document.querySelectorAll(".toc")[0];

// console.log(div);
// console.log(div1);
// console.log(div2);

//3. Write some JavaScript code to change the color for every odd indexed link in the table of contents to green.

function walk(node, callback) {
  callback(node);

  for (let index = 0; index < node.childNodes.length; index += 1) {
    walk(node.childNodes[index], callback);
  }
}

//first way:
// let body = document.children[0].children[1];
// let anchors = [];
// walk(body, node => {
//   if (node instanceof HTMLAnchorElement) {
//     anchors.push(node);
//   }
// });

//second way:
// let anchors = document.querySelectorAll('.toc a');

// for (let i = 0; i < anchors.length; i++) {
//   if (i % 2 === 0) {
//     anchors[i].style.color = 'green';
//   }
// }


//4. Write some JavaScript code to retrieve the text of every thumbnail caption on the page.
// let divs = document.querySelectorAll('.thumbcaption');
// let texts = [];
// for (let i = 0; i < divs.length; i++) {
//   texts.push(divs[i].textContent.trim());
// }
// console.log(texts);


//5. You can think of the scientific classification of an animal as a series of key-value pairs. Here, the keys are taxonomic ranks (Domain, Kingdom, Phylum, etc.). The values are the specific groups to which the animal belongs.

// Write JavaScript code that extracts the classification of animals from the web page and logs an Object that uses the ranks as keys and the groups as values. You may assume the taxonomic ranks to use as keys is provided for you as an array.



