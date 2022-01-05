function walk(node, callback) {
  callback(node);

  for (let index = 0; index < node.childNodes.length; index += 1) {
    walk(node.childNodes[index], callback);
  }
};

function countChildren(arrOfNodes) {
  if (!Array.isArray(arrOfNodes)) {
    arrOfNodes = Array.prototype.slice.call(arrOfNodes);
  }
  let counters = []; 
  
  arrOfNodes.forEach(el => {
    let nodeName = el.toString();
    let allNodes = 0; 
    let indirectChildren = 0; 
    let directChildren = 0; 
    
    walk(el, (node) => {
      if (node !== el) {
        allNodes++;
        if (node.parentNode !== el) indirectChildren++;
        if (node.parentNode === el ) directChildren++; 
      }
    });

  counters.push({nodeName, allNodes, indirectChildren, directChildren});
  }); 
  return counters; 
 };

let nodeList = ['1','2', '3', '4', '5', '6', '7', '8', '9', '10'].map(el => {
  return document.getElementById(el);
})

console.log(countChildren(nodeList));