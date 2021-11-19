// Write a JavaScript function that returns the p elements in the DOM represented by this HTML:
function walk(node, callback) {
  callback(node);

  for (let index = 0; index < node.childNodes.length; index += 1) {
    walk(node.childNodes[index], callback);
  }
}

function findAllParagrapshs() {
  let body = document.childNodes[1].children[1];
  let paragraphs = [];
  walk(body, (node) => {
    if (node.nodeName === 'P') {
      paragraphs.push(node);
    }
  })
  return paragraphs;
};

console.log(findAllParagrapshs());