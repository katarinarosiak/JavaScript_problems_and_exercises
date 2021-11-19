let textNode = document.createTextNode('Hello Hello');
let paragraph = document.createElement('p');
paragraph.appendChild(textNode);
document.body.appendChild(paragraph);

for (let i = 0; i < 10; i++) {
  let clone = textNode.cloneNode(false);
  document.body.appendChild(clone);
}