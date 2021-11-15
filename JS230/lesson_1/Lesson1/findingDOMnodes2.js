// Write a JavaScript function that adds the class article-text to every <p> tag in this HTML:
function addClass(className) {
  let bodyNodes = document.childNodes[1].children[1].childNodes;

  for (let i = 0; i < bodyNodes.length; i++) {
    if (bodyNodes[i] instanceof HTMLParagraphElement) {
      bodyNodes[i].classList.add(className);
    }
  }

}

addClass('article-text');

// Update the answer to question 3 of problem group 1 to use the document.getElementsByTagName method:

let chosenParas = document.getElementsByTagName("p");

for (let i = 0; i < chosenParas.length; i++) {
  chosenParas[i].classList.add("article-text");
}

//2. Let's make the previous problem more realistic. Instead of adding the article-text class to every paragraph on the page, let's restrict it to only the paragraphs inside a <div class="intro"> tag. How can we do this? Keep in mind that you can call getElementsByClassName and getElementsByTagName on any element; document is handiest when you need all matching elements from the page, but you can use any other element if you don't need everything on the page.

// Update the code from Problem 1 to add the article-text class to paragraphs inside <div class="intro">, and nowhere else.


function updateParasInDivs(className) {
  let divs = document.getElementsByClassName('intro');
  divs = Array.prototype.slice.call(divs);
  let paras = document.getElementsByClassName("p");
  paras = Array.prototype.slice.call(paras);

  divs.forEach(div => {
    paras.forEach(para => {
      para.classList.add(className);
    });
  });
};

updateParasInDivs("article-text");