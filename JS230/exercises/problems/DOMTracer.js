
function walkUp(node, end, callback) {
    callback(node);
    let parent = node.parentNode;
    let id = node.getAttribute('id');
    if (id === end) {
      return; 
    } else {
        walkUp(parent, '1', callback); 
    }
}

function domTreeTracer(id) {
    let final = []; 
    let node = document.getElementById(id.toString());
    walkUp(node, '1', (node) => {
        let names = []; 
 
        let syblings = Array.prototype.slice.call(node.parentNode.children);
        syblings.forEach(sybling => {
        names.push(sybling.tagName);
        });
        final.push(names);
    }); 

    return final;
}

console.log(domTreeTracer(22));


