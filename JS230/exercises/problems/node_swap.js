/* 
i: two el ids (int)
o: true for valid swaps and undefined for invalid
=> swap the positons of those two ekement

invalid: 
- at leastt one of the id doesn't exist => undefined 
- if one of the nodes is a child of the other ==> undefined 


R:
- always a value of id 
- always two arguments

A: 
- check if both id exist: 
    - walk the DOM and get all ids of all ele,emts
    - if any of the args are not included return undeinf; 
if (isChildOf)child, parent
    check if child is child of the parent  
    - get all children of the potential paranet  
    - if no children return false; ??
    - on eahc of the children check if the node exist 
    - if exist return true 
    - if not found before return false  
    return undefiend
- else: 
    - swap 
    - return true 

    swap: 
         - get parent Node of each el
         - take the first el and add it in the beginning of childNodes of the paren
         - do the same with teh other element 

*/


document.addEventListener('DOMContentLoaded', () => {
    function nodeSwap(id1, id2) {
        let firstNode = document.getElementById(id1.toString());
        let secondNode = document.getElementById(id2.toString());  
    
        if ((firstNode && secondNode) && (!firstNode.contains(secondNode) && !secondNode.contains(firstNode))) {
            let firstParent = firstNode.parentNode; 
            let secondParent = secondNode.parentNode;

            let firstPrevious = firstNode.nextSibling;
            let secondPrevious = secondNode.nextSibling;

            firstParent.insertBefore(secondNode, firstPrevious);
            secondParent.insertBefore(firstNode, secondPrevious);   
            return true;  
        } 
    }

    console.log(nodeSwap(3, 1)); 
});