

document.addEventListener('DOMContentLoaded', () => {

    function colorGeneration(endLevel) {    
        let final = [];
        let parentNode = document.getElementById('1').parentNode;

        getChildren(parentNode, startLevel=1); 

        function getChildren(parentNode, level) {
            let allChildren = Array.prototype.slice.call(parentNode.children);
        
            if (endLevel === level) {
                allChildren.forEach(child => {
                    final.push(child);
                });  
            } else {
                allChildren.forEach(child => {
                    getChildren(child, level+1); 
                });
            }
        };
        final.forEach(node => {
            node.classList.add("generation-color"); 
        });  
    };
    
    colorGeneration(5);    
});


