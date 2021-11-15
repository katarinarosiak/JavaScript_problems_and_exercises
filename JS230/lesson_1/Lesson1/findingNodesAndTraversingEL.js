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
function walk(node, callback) {
  callback(node);

  for (let index = 0; index < node.childNodes.length; index += 1) {
    walk(node.childNodes[index], callback);
  }
}
function findDiv() {
  let divs = document.querySelectorAll("div");
  divs = Array.prototype.slice.call(divs);
  return divs.filter(div => {
    return walk(div, (node) => {
      let headings = document.querySelectorAll('h2');
      Array.prototype.slice.call(headings);
      if (node.textContent === 'Contents' && node instanceof HTMLHeadingElement) {
        console.log(div);
        return div;
      }
    });
  });
}
console.log(findDiv());
//3.
