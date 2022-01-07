// slice for DOM

// 2 arg: start idx (int), => parent node id attribute
// end idx (the innermost child node's id attribute )

// return array of tagNames 


// - start needs to be a parent to end (cannot be siblings)
// - inclusive on both sides 
// - only elements
// - only elements that has body as an ancestor 
// - if the id attribute of start or end is not in the DOM return undefined 
// - if the slice is not feasible - no path connecting the elemtn at the starting to teh end index return undefined 

//- if start idx is grater than end => undefined 
// - no duplicates 

// - if end is < start => undefined 
// - if start > 1 and < 24  or end < 24 and > 1 => undefined 
// - if end is not child of start => undefined 

// - end node
// - get parent node 
//  - get all parents of the end node until the start node. 

// walkUp: 
// - call the callback on node
// - get the parent of the node
//call walk on the parent 


document.addEventListener('DOMContentLoaded', () => {
    function walkUp(node, endNode, callback) {
        callback(node);

        if (node !== endNode) {
            let parent = node.parentNode;
            walkUp(parent, endNode, callback);
        }
    }

    function areSiblings(endNode, startNode) {
        return endNode.parentNode === startNode.parentNode
    };
    
    function sliceTree(start, end) {
        if (end < start) return undefined; 
        if ((start < 1 || start > 24) || (end > 24 || end < 1)) return undefined; 

        let startStr = start.toString();
        let endStr = end.toString(); 
        let endNode = document.getElementById(startStr);
        let startNode = document.getElementById(endStr);

        if (areSiblings(endNode, startNode)) return undefined; 
        
        let nodes = []; 
    
        walkUp(startNode, endNode, (node) => {
            if (node instanceof Element) {
                if (!nodes.includes(node.tagName)) {
                    nodes.push(node.tagName);
                };
            }
        })
        return nodes.reverse(); 
    }
    
    console.log(sliceTree(1, 19)); 

    console.log(sliceTree(1, 4));
    // ["ARTICLE", "HEADER", "SPAN", "A"]
    console.log(sliceTree(1, 76));
    //undefined
    console.log(sliceTree(2, 5));
    // //undefined
    console.log(sliceTree(5, 4));
    //undefined
    console.log(sliceTree(1, 23));
    //["ARTICLE", "FOOTER"]
    console.log(sliceTree(1, 22));
    //["ARTICLE", "MAIN", "SECTION", "P", "SPAN", "STRONG", "A"]
    console.log(sliceTree(11, 19));
    //["SECTION", "P", "SPAN", "STRONG", "A"]

});



















