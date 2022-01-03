//You can think of the scientific classification of an animal as a series of key-value pairs. Here, the keys are taxonomic ranks (Domain, Kingdom, Phylum, etc.). The values are the specific groups to which the animal belongs.

// Write JavaScript code that extracts the classification of animals from the web page and logs an Object that uses the ranks as keys and the groups as values. You may assume the taxonomic ranks to use as keys is provided for you as an array.

//get an array of 
function walk(node, callback) {
  callback(node);

  for (let index = 0; index < node.childNodes.length; index += 1) {
    walk(node.childNodes[index], callback);
  }
}


let scientificClassification = {}; 
let taxonomicRanks = ['Kingdom', 'Phylum', 'Class', 'Order', 'Family', 'Genus', 'Species']; 
let table = document.querySelectorAll("table")[0];

let textContent = table.textContent;
let textNodes = []; 

walk(table, (node) => {
  if (node.nodeType === Node.TEXT_NODE && node.nodeValue.trim().length > 0) {
    textNodes.push(node.nodeValue);
  }
});


taxonomicRanks.forEach(rank => {
  textNodes.forEach((text, idx) => {

    if (`${rank}:` === text) {
       scientificClassification[rank] = textNodes[idx +1];
    }
  })
}); 

console.log(scientificClassification);